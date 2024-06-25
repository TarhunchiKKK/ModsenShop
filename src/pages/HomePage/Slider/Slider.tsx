import { IProduct } from "@/types";
import { SliderWrapper, DotsWrapper, Dot, CurretnDot } from "./styled";
import { useEffect, useState } from "react";
import { CHANGE_SLIDE_DELAY } from "../constants";
import { Slide } from "./Slide";

interface ISliderProps {
    products: IProduct[];
}

export function Slider({ products }: ISliderProps) {
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % products.length);
        }, CHANGE_SLIDE_DELAY);

        return () => clearInterval(interval);
    }, [products]);

    const handleDotClick = (idx: number) => {
        setCurrentSlide(idx);
    };

    return (
        <SliderWrapper>
            {products.map((product, idx) => (
                <Slide key={product.id} product={product} index={idx} currentSlide={currentSlide} />
            ))}

            <DotsWrapper>
                {products.map((product, idx) => {
                    return currentSlide === idx ? (
                        <CurretnDot
                            key={product.id}
                            onClick={() => handleDotClick(idx)}
                        ></CurretnDot>
                    ) : (
                        <Dot key={product.id} onClick={() => handleDotClick(idx)}></Dot>
                    );
                })}
            </DotsWrapper>
        </SliderWrapper>
    );
}
