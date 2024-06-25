import { useNavigate } from "react-router-dom";
import { routes } from "@/constants";
import { IProduct } from "@/types";
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

interface IProductCardProps {
    product: IProduct;
}

export function ProductCard({ product }: IProductCardProps) {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate(`${routes.product}/${product.id}`);
    };

    const handleAddToCart = (e: React.MouseEvent<HTMLSpanElement>) => {
        e.stopPropagation();
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
