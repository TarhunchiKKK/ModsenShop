import { useEffect, useState } from "react";
import { ISliderProps } from "./props";
import { PRODUCT_SLIDER_DELAY, PRODUCT_SLIDER_IMAGES_COUNT } from "../constants";
import { ColumnImageWrapper, ImagesColumn, Image, Wrapper, CurrentImageWrapper } from "./styled";

export function Slider({ slides }: ISliderProps) {
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    useEffect(() => {
        const intervalFunction = () => {
            if (currentSlide === PRODUCT_SLIDER_IMAGES_COUNT - 1) {
                setCurrentSlide(0);
            } else {
                setCurrentSlide((prev) => prev + 1);
            }
        };

        const interval = setInterval(() => intervalFunction(), PRODUCT_SLIDER_DELAY);

        return () => clearInterval(interval);
    }, [currentSlide]);

    return (
        <Wrapper $currentSlide={currentSlide}>
            <ImagesColumn>
                {slides.map((slide, idx) => (
                    <ColumnImageWrapper
                        key={idx}
                        $isActive={currentSlide === idx}
                        onClick={() => setCurrentSlide(idx)}
                    >
                        <Image src={slide} />
                    </ColumnImageWrapper>
                ))}
            </ImagesColumn>

            <CurrentImageWrapper>
                <Image src={slides[currentSlide]} />
            </CurrentImageWrapper>
        </Wrapper>
    );
}
