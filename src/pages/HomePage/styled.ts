import styled from "styled-components";

export const FirstSection = styled.section`
    padding-top: 16px;
    padding-bottom: 21px;

    @media (min-width: 768px) {
        padding-top: 0px;
        padding-bottom: 42px;
    }

    @media (min-width: 1024px) {
        padding-bottom: 64px;
    }
`;

export const SecondSection = styled.section`
    padding-bottom: 94px;

    @media (min-width: 768px) {
        padding-bottom: 130px;
    }

    @media (min-width: 1024px) {
        padding-bottom: 200px;
    }

    media (min-width: 1440px) {
        padding-bottom: 252px;
    }
`;

export const SecondSectionContentWrapper = styled.div`
    padding: 0px 16px;
`;

export const SecondSectionTitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 39px;
`;

export const ViewAllSpan = styled.span`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
    color: ${({ theme }) => theme.colors.main.logo};

    cursor: pointer;
    &:hover {
        color: ${({ theme }) => theme.colors.main.black};
        transition: ${({ theme }) => theme.transitions.links};
    }

    @media (min-width: 768px) {
        font-size: 18px;
        line-height: 24px;
    }

    @media (min-width: 1280px) {
        font-size: 20px;
        line-height: 26px;
    }
`;
