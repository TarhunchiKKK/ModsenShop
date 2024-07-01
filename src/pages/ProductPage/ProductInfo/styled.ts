import { styled } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
`;

export const ProductTitle = styled.h1`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 26px;
    font-weight: 400;
    line-height: 35px;
    margin-bottom: 23px;
`;

export const ProductPrice = styled.span`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 20px;
    font-weight: 500;
    line-height: 26px;
    color: ${({ theme }) => theme.colors.main.logo};
    margin-bottom: 64px;
`;

export const RatingWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 24px;
    margin-bottom: 19px;
`;

export const StarsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`;

export const Star = styled.div``;

export const ReviewSpan = styled.span`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 16px;
    font-weight: 400;
    line-height: 27px;
    color: ${({ theme }) => theme.colors.neutral.darkGray};
`;

export const Description = styled.p`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 16px;
    font-weight: 400;
    line-height: 27px;
    color: ${({ theme }) => theme.colors.neutral.darkGray};
`;

export const ProductInfoFooter = styled.div``;

export const LinksWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 24px;
    margin-bottom: 64px;
`;

export const NetworkLink = styled.a``;

export const NetworkLinkIcon = styled.i`
    color: ${({ theme }) => theme.colors.neutral.darkGray};
    cursor: pointer;
`;

export const CategoriesWrapper = styled.div``;

export const CategoriesTitle = styled.span`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 16px;
    font-weight: 400;
    line-height: 27px;
    margin-right: 16px;
`;

export const Categories = styled(CategoriesTitle)`
    color: ${({ theme }) => theme.colors.neutral.lightGray};
`;
