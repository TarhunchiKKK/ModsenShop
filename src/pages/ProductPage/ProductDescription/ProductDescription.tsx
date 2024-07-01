import { IProductDescriptionProps } from "./props";
import { Description, Wrapper, WrapperTitle } from "./styled";

export function ProductDescription({ description }: IProductDescriptionProps) {
    return (
        <Wrapper>
            <WrapperTitle>Description</WrapperTitle>
            <Description>{description}</Description>
        </Wrapper>
    );
}
