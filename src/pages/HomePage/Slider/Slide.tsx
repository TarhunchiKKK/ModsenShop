import { IProduct } from "@/types";
import {
    ImageWrapper,
    Image,
    ProductInfoWrapper,
    ProductTitle,
    ProductPrice,
    Button
} from "./styled";

interface ISlideProps {
    product: IProduct;
    index: number;
    currentSlide: number;
}

export function Slide({ product, index, currentSlide }: ISlideProps) {
    return (
        <ImageWrapper $index={index} $currentIndex={currentSlide}>
            <Image src={product.image} alt={product.title} />

            <ProductInfoWrapper $index={index} $currentIndex={currentSlide}>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductPrice>{`$ ${product.price}`}</ProductPrice>
                <Button>View Product</Button>
            </ProductInfoWrapper>
        </ImageWrapper>
    );
}
