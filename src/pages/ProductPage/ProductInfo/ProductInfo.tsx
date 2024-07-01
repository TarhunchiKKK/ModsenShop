import { useMediaQuery } from "@/utils";
import { PRODUCT_INFO_BREAKPOINT, SocialNetworks, Stars } from "../constants";
import { getBackgroundSize } from "../helpers";
import { IProductInfoProps } from "./props";
import * as Styled from "./styled";
import { useState } from "react";

export function ProductInfo({ product }: IProductInfoProps) {
    const { isMatch: isViewMoreVisible } = useMediaQuery(PRODUCT_INFO_BREAKPOINT);
    const [isViewMoreOpen, setIsViewMoreOpen] = useState<boolean>(isViewMoreVisible);

    const handleViewMore = () => {
        setIsViewMoreOpen(true);
    };

    return (
        <Styled.Wrapper>
            <Styled.MainInfo>
                <Styled.ProductTitle>{product.title}</Styled.ProductTitle>

                <Styled.ProductPrice>{`$ ${product.price}`}</Styled.ProductPrice>

                {(isViewMoreOpen || !isViewMoreVisible) && (
                    <Styled.RatingWrapper>
                        <Styled.StarsWrapper>
                            {Stars.map((className, idx) => (
                                <Styled.Star
                                    key={idx}
                                    $percent={getBackgroundSize(idx, product.rating.rate)}
                                    className={className}
                                />
                            ))}
                        </Styled.StarsWrapper>

                        <Styled.ReviewSpan>{`${product.rating.count} customer review`}</Styled.ReviewSpan>
                    </Styled.RatingWrapper>
                )}

                <Styled.Description>
                    <span>{product.description.slice(0, 100)}</span>

                    {isViewMoreVisible && !isViewMoreOpen && (
                        <>
                            <span>...</span>
                            <div>
                                <Styled.ViewMoreButton $isOpen={true} onClick={handleViewMore}>
                                    View more
                                </Styled.ViewMoreButton>
                                <span>{">"}</span>
                            </div>
                        </>
                    )}

                    {(isViewMoreOpen || !isViewMoreVisible) && (
                        <span>{product.description.slice(100)}</span>
                    )}
                </Styled.Description>
            </Styled.MainInfo>

            {(isViewMoreOpen || !isViewMoreVisible) && (
                <Styled.ProductInfoFooter>
                    <Styled.LinksWrapper>
                        {SocialNetworks.map((network, idx) => (
                            <Styled.NetworkLink key={idx} href={network.href} target="_blank">
                                <Styled.NetworkLinkIcon className={network.iconClassName} />
                            </Styled.NetworkLink>
                        ))}
                    </Styled.LinksWrapper>

                    <Styled.CategoriesWrapper>
                        <Styled.CategoriesTitle>Categories: </Styled.CategoriesTitle>

                        <Styled.Categories>{product.category}</Styled.Categories>
                    </Styled.CategoriesWrapper>
                </Styled.ProductInfoFooter>
            )}
        </Styled.Wrapper>
    );
}
