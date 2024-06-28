import { IProduct } from "@/types";

export interface ISliderProps {
    products: IProduct[];
}

export interface ISlideProps {
    product: IProduct;
    index: number;
    currentSlide: number;
}
