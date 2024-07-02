import { IRangeProps } from "./props";
import { Progress, RangeFooter, RangeInput, RangeInputsWrapper, RangeSpan, Slider } from "./styled";

export function Range({ minValue, maxValue, step, value, onChange }: IRangeProps) {
    const handleChangeValueFrom = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const newMinValue = Math.min(+e.target.value, value.max - step);
        onChange(newMinValue, value.max);
    };

    const handleChangeValueTo = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const newMaxValue = Math.max(+e.target.value, value.min + step);
        onChange(value.min, newMaxValue);
    };

    return (
        <>
            <Slider>
                <Progress
                    $left={(value.min / maxValue) * 100}
                    $right={100 - (value.max / maxValue) * 100}
                ></Progress>
            </Slider>

            <RangeInputsWrapper>
                <RangeInput
                    type="range"
                    min={minValue}
                    max={maxValue}
                    step={step}
                    value={value.min}
                    onChange={handleChangeValueFrom}
                />
                <RangeInput
                    type="range"
                    min={minValue}
                    max={maxValue}
                    step={step}
                    value={value.max}
                    onChange={handleChangeValueTo}
                />
            </RangeInputsWrapper>

            <RangeFooter>
                <RangeSpan>{`Price: $${value.min} - $${value.max}`}</RangeSpan>
            </RangeFooter>
        </>
    );
}
