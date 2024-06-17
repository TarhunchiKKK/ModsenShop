import { StyledInput } from "./styled";

interface IInputProps {
    placeholder: string;
    padding?: string;
}

export function Input({ placeholder, padding = "12px" }: IInputProps) {
    return <StyledInput style={{ paddingBottom: padding }} placeholder={placeholder} />;
}
