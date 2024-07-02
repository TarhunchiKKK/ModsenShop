import { IDropdownProps } from "./props";
import { Select, Wrapper } from "./styled";

export function Dropdown({ options, marginBottom, defaultValue }: IDropdownProps) {
    return (
        <Wrapper $marginBottom={marginBottom}>
            <Select defaultValue={defaultValue}>
                {options.map((option, idx) => (
                    <option key={idx} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </Select>
        </Wrapper>
    );
}
