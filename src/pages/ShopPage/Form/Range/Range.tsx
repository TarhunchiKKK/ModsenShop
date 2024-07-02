import { useState } from "react";
import { IRangeProps } from "./props";
import {
    Progress,
    RangeFooter,
    RangeInput,
    RangeInputsWrapper,
    RangeSpan,
    Slider,
    SubmitButton,
} from "./styled";

export function Range({ minValue, maxValue, step }: IRangeProps) {
    const [valueFrom, setValueFrom] = useState<number>(minValue);
    const [valueTo, setValueTo] = useState<number>(maxValue);

    const handleChangeValueFrom = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setValueFrom(Math.min(+e.target.value, valueTo - step));
    };

    const handleChangeValueTo = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setValueTo(Math.max(+e.target.value, valueFrom + step));
    };

    return (
        <>
            <Slider>
                <Progress
                    $left={(valueFrom / maxValue) * 100}
                    $right={100 - (valueTo / maxValue) * 100}
                ></Progress>
            </Slider>

            <RangeInputsWrapper>
                <RangeInput
                    type="range"
                    min={minValue}
                    max={maxValue}
                    step={step}
                    value={valueFrom}
                    onChange={handleChangeValueFrom}
                />
                <RangeInput
                    type="range"
                    min={minValue}
                    max={maxValue}
                    step={step}
                    value={valueTo}
                    onChange={handleChangeValueTo}
                />
            </RangeInputsWrapper>

            <RangeFooter>
                <RangeSpan>{`Price: $${valueFrom} - $${valueTo}`}</RangeSpan>

                <SubmitButton>Filter</SubmitButton>
            </RangeFooter>
        </>
    );
}
