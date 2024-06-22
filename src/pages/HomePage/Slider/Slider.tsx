import { IProduct } from "@/types";
import {
    ImageWrapper,
    SliderWrapper,
    Image,
    DotsWrapper,
    Dot,
    SliderContentWrapper,
    CurretnDot
} from "./styled";
import { useEffect, useRef, useState } from "react";
import { SLIDES_COUNT } from "../constants";

interface ISliderProps {
    products: IProduct[];
}

export function Slider({ products }: ISliderProps) {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentSlide + 1 === SLIDES_COUNT) {
                setCurrentSlide(0);
            } else {
                setCurrentSlide((prev) => prev + 1);
            }

            sliderRef.current?.scrollTo({
                left: currentSlide * sliderRef.current.clientWidth,
                behavior: "auto"
            });
        }, 2000);

        return () => clearInterval(interval);
    }, [currentSlide]);

    const handleDotClick = (idx: number) => {
        setCurrentSlide(idx);
        sliderRef.current?.scrollTo({
            left: idx * sliderRef.current.clientWidth,
            behavior: "auto"
        });
    };

    return (
        <SliderWrapper>
            <SliderContentWrapper ref={sliderRef}>
                {products.map((product) => (
                    <ImageWrapper key={product.id}>
                        <Image src={product.image} alt={product.title} />
                    </ImageWrapper>
                ))}
            </SliderContentWrapper>

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
