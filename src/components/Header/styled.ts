import styled from "styled-components";

export const StyledHeader = styled.header`
    position: relative;
    padding: 17px 6px 0px;

    @media (min-width: 768px) {
        padding: 24px 0px 0px;
    }

    @media (min-width: 1024px) {
        padding: 64px 0px 0px;
    }
`;

export const HeaderContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 7px 10px;
    border-bottom: 1px solid #d8d8d8;

    @media (min-width: 640px) {
        padding-left: 0px;
        padding-right: 0px;
    }

    @media (min-width: 1024px) {
        padding-bottom: 17px;
    }
`;

export const LogoStartSpan = styled.span`
    font-family: ${({ theme }) => theme.fonts.logo};
    font-weight: 400;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.main.logo};

    @media (min-width: 420px) {
        font-size: 24px;
    }

    @media (min-width: 768px) {
        font-size: 35px;
    }
`;

export const LogoEndSpan = styled(LogoStartSpan)`
    color: ${({ theme }) => theme.colors.main.black};
`;
