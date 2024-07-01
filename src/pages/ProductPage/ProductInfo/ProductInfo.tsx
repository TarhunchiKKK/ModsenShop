import { SocialNetworks, Stars } from "../constants";
import { getBackgroundSize } from "../helpers";
import { IProductInfoProps } from "./props";
import * as Styled from "./styled";

export function ProductInfo({ product }: IProductInfoProps) {
    return (
        <Styled.Wrapper>
            <Styled.MainInfo>
                <Styled.ProductTitle>{product.title}</Styled.ProductTitle>

                <Styled.ProductPrice>{`$ ${product.price}`}</Styled.ProductPrice>

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

                <Styled.Description>{product.description}</Styled.Description>
            </Styled.MainInfo>

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
        </Styled.Wrapper>
    );
}
