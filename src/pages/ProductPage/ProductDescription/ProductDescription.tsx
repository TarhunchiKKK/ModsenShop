import { useState } from "react";
import { IProductDescriptionProps } from "./props";
import { AngleWrapper, Description, TitleDiv, Wrapper, WrapperTitle } from "./styled";
import { IconThemeWrapper } from "@/components";
import { AngleIconDark, AngleIconLight } from "@/assets";
import { useMediaQuery } from "@/utils";
import { PRODUCT_DETAIL_BREAKPOINT } from "../constants";

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
