import { useState } from "react";
import { useMediaQuery } from "@/utils";
import { IconThemeWrapper } from "@/components";
import { AngleIconDark, AngleIconLight } from "@/assets";
import { IProductDescriptionProps } from "./props";
import { PRODUCT_DETAIL_BREAKPOINT } from "../constants";
import { AngleWrapper, Description, TitleDiv, Wrapper, WrapperTitle } from "./styled";

export function ProductDescription({ description }: IProductDescriptionProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { isMatch: areDetailsVisible } = useMediaQuery(PRODUCT_DETAIL_BREAKPOINT);

    const handleOpen = () => setIsOpen((prev) => !prev);

    return (
        <Wrapper>
            <TitleDiv>
                <WrapperTitle>Description</WrapperTitle>

                <AngleWrapper $isOpen={isOpen} onClick={handleOpen}>
                    <IconThemeWrapper srcLight={AngleIconDark} srcDark={AngleIconLight} />
                </AngleWrapper>
            </TitleDiv>

            {(isOpen || areDetailsVisible) && <Description>{description}</Description>}
        </Wrapper>
    );
}
