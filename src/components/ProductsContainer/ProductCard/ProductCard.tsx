import { IProduct } from "@/types";
import { CardWrapper, ImageWrapper, Image, ProductTitle, ProductPrice } from "./styled";

interface IProductCardProps {
    product: IProduct;
}

export function ProductCard({ product }: IProductCardProps) {
    return (
        <CardWrapper>
            <ImageWrapper>
                <Image src={product.image} alt={product.title} />
            </ImageWrapper>

            <ProductTitle>{product.title}</ProductTitle>

            <ProductPrice>{product.price}</ProductPrice>
        </CardWrapper>
    );
}
