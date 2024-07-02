import { IconThemeWrapper } from "@/components";
import * as Styled from "./styled";
import { SearchIconDark, SearchIconLight } from "@/assets";
import { IInputProps } from "./props";

export function Input({ marginBottom }: IInputProps) {
    return (
        <Styled.Wrapper $marginBottom={marginBottom}>
            <Styled.Input type="text" placeholder="Search..." />

            <Styled.IconWrapper>
                <IconThemeWrapper srcLight={SearchIconDark} srcDark={SearchIconLight} />
            </Styled.IconWrapper>
        </Styled.Wrapper>
    );
}
