import { useNavigate } from "react-router-dom";
import { useAuth, useProductIncart } from "@/utils";
import { routes } from "@/constants";
import { cartApi } from "@/api";
import { IProductCardProps } from "./props";
import {
    CardWrapper,
    ImageWrapper,
    Image,
    ProductTitle,
    ProductPrice,
    ShadowLinkWrapper,
    ShadowDiv,
    ShadowLinkText,
} from "./styled";

export function ProductCard({ product }: IProductCardProps) {
    const navigate = useNavigate();

    const [createCart] = cartApi.useCreateCartMutation();
    const [removeCart] = cartApi.useRemoveCartMutation();

    const isInCart = useProductIncart(product);
    const isAuth = useAuth();

    const handleRedirect = () => {
        navigate(`${routes.product}/${product.id}`);
    };

    const handleAddToCart = async (e: React.MouseEvent<HTMLSpanElement>) => {
        e.stopPropagation();
        if (isInCart) {
            removeCart(product.id);
        } else {
            if (isAuth) {
                await createCart(product);
            } else {
                navigate(routes.auth);
            }
        }
    };

    return (
        <CardWrapper>
            <ImageWrapper onClick={handleRedirect}>
                <Image src={product.image} alt={product.title} />

                <ShadowDiv>
                    <ShadowLinkWrapper onClick={(e) => e.stopPropagation()}>
                        <ShadowLinkText onClick={handleAddToCart}>
                            {isInCart ? "Remove from cart" : "Add to cart"}
                        </ShadowLinkText>
                    </ShadowLinkWrapper>
                </ShadowDiv>
            </ImageWrapper>

            <ProductTitle>{product.title}</ProductTitle>

            <ProductPrice>{`$ ${product.price}`}</ProductPrice>
        </CardWrapper>
    );
}
