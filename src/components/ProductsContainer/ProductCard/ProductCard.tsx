import { useNavigate } from "react-router-dom";
import { useProductIncart } from "@/utils";
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
import { useAppSelector } from "@/store";

export function ProductCard({ product }: IProductCardProps) {
    const navigate = useNavigate();
    const { user } = useAppSelector((state) => state.user);

    const [addToCart] = cartApi.useCreateCartMutation();
    const [removeFromCart] = cartApi.useRemoveCartMutation();

    const isInCart = useProductIncart(product);

    const handleRedirect = () => {
        navigate(`${routes.product}/${product.id}`);
    };

    const handleAddToCart = async (e: React.MouseEvent<HTMLSpanElement>) => {
        e.stopPropagation();
        if (user) {
            isInCart ? removeFromCart(user.id, product.id) : addToCart(user.id, product);
        } else {
            navigate(routes.auth);
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
