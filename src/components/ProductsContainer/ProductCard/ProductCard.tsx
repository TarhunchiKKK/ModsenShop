import { useNavigate } from "react-router-dom";
import { routes } from "@/constants";
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
import { cartApi } from "@/firebase";

export function ProductCard({ product }: IProductCardProps) {
    const navigate = useNavigate();
    const [createCart] = cartApi.useCreateCartMutation();

    const handleRedirect = () => {
        navigate(`${routes.product}/${product.id}`);
    };

    const handleAddToCart = async (e: React.MouseEvent<HTMLSpanElement>) => {
        e.stopPropagation();
        await createCart(product);
    };

    return (
        <CardWrapper>
            <ImageWrapper onClick={handleRedirect}>
                <Image src={product.image} alt={product.title} />

                <ShadowDiv>
                    <ShadowLinkWrapper onClick={(e) => e.stopPropagation()}>
                        <ShadowLinkText onClick={handleAddToCart}>Add to cart</ShadowLinkText>
                    </ShadowLinkWrapper>
                </ShadowDiv>
            </ImageWrapper>

            <ProductTitle>{product.title}</ProductTitle>

            <ProductPrice>{`$ ${product.price}`}</ProductPrice>
        </CardWrapper>
    );
}
