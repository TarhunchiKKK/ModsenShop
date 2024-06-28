import { ITitleProps } from "./props";
import { StyledTitle } from "./styled";

export function Title({ content }: ITitleProps) {
    return <StyledTitle>{content}</StyledTitle>;
}
