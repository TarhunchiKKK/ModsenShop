import { IDropdownProps } from "./props";
import { Select, Wrapper } from "./styled";

export function Dropdown({ options, value, onChange, marginBottom }: IDropdownProps) {
    return (
        <Wrapper $marginBottom={marginBottom}>
            <Select value={value} onChange={onChange}>
                {options.map((option, idx) => (
                    <option key={idx} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </Select>
        </Wrapper>
    );
}
