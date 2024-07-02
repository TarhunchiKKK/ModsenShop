import { IconThemeWrapper } from "@/components";
import { SearchIconDark, SearchIconLight } from "@/assets";
import * as Styled from "./styled";
import { IInputProps } from "./props";

export function Input({ value, onChange, marginBottom }: IInputProps) {
    return (
        <Styled.Wrapper $marginBottom={marginBottom}>
            <Styled.Input type="text" value={value} onChange={onChange} placeholder="Search..." />

            <Styled.IconWrapper>
                <IconThemeWrapper srcLight={SearchIconDark} srcDark={SearchIconLight} />
            </Styled.IconWrapper>
        </Styled.Wrapper>
    );
}
