import { useState } from "react";
import { ISliderProps } from "./props";
import { ColumnImageWrapper, ImagesColumn, Image, Wrapper, CurrentImageWrapper } from "./styled";

export function Slider({ slides }: ISliderProps) {
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    return (
        <Wrapper>
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
