import { useEffect, useState } from "react";
import { Slide } from "./Slide";
import { ISliderProps } from "./props";
import { SliderWrapper, DotsWrapper, Dot, CurretnDot } from "./styled";
import { CHANGE_SLIDE_DELAY } from "../constants";

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
