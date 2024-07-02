export interface IRangeProps {
    minValue: number;
    maxValue: number;
    step: number;
    value: { min: number; max: number };
    onChange: (min: number, max: number) => void;
}
