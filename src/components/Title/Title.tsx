import { StyledTitle } from "./styled";

interface ITitleProps {
    content: string;
}

export function Title({ content }: ITitleProps) {
    return <StyledTitle>{content}</StyledTitle>;
}
