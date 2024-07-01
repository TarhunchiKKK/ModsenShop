import { useState } from "react";
import { IProductDescriptionProps } from "./props";
import { AngleWrapper, Description, TitleDiv, Wrapper, WrapperTitle } from "./styled";
import { IconThemeWrapper } from "@/components";
import { AngleIconDark, AngleIconLight } from "@/assets";

export function ProductDescription({ description }: IProductDescriptionProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleOpen = () => setIsOpen((prev) => !prev);

    return (
        <Wrapper>
            <TitleDiv>
                <WrapperTitle>Description</WrapperTitle>

                <AngleWrapper $isOpen={isOpen} onClick={handleOpen}>
                    <IconThemeWrapper srcLight={AngleIconDark} srcDark={AngleIconLight} />
                </AngleWrapper>
            </TitleDiv>

            {isOpen && <Description>{description}</Description>}
        </Wrapper>
    );
}
