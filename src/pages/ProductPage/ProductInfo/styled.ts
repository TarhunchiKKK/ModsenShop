import { styled } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
`;

export const MainInfo = styled.div``;

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
    display: block;
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

export const Star = styled.i<{ $percent: number }>`
    color: ${({ theme }) => theme.colors.main.black};
    overflow: hidden;

    &::before {
        // content: "\f005";
        overflow: hidden;
        // background-color: ${({ theme }) => theme.colors.main.black};
        // background-size: ${(props) => props.$percent}%;
    }
`;

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

export const NetworkLink = styled.a`
    font-size: 18px;
`;

export const NetworkLinkIcon = styled.i`
    color: ${({ theme }) => theme.colors.neutral.darkGray};
    cursor: pointer;
    &:hover {
        color: ${({ theme }) => theme.colors.main.black};
    }
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
    color: ${({ theme }) => theme.colors.neutral.darkGray};
`;
