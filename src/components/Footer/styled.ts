import styled from "styled-components";

export const StyledFooter = styled.footer`
    padding: 0px 16px 17px;

    @media (min-width: 640px) {
        padding: 0px 16px 32px;
    }
`;

export const FooterContentWrapper = styled.div`
    border-top: none;
    padding-top: 0px;

    @media (min-width: 500px) {
        padding-top: 40px;
        border-top: 1px solid #d8d8d8;
    }
`;

export const FooterContentFirst = styled.div`
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;
    gap: 40px;

    @media (min-width: 768px) {
        flex-direction: row;
        gap: 30px;
    }
`;

export const FooterLinksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    width: 98%;
    gap: 10px;

    @media (min-width: 500px) {
        flex-direction: row;
        align-items: center;
        gap: 40px;
        width: auto;
    }

    @media (min-width: 768px) {
        gap: 24px;
    }

    @media (min-width: 1024px) {
        gap: 41px;
    }
`;

export const FooterContentSecond = styled.div`
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: start;
    margin-top: 32px;
    gap: 36px;

    @media (min-width: 500px) {
        flex-direction: row;
        align-items: center;
        gap: 10px;
    }

    @media (min-width: 768px) {
        margin-top: 48px;
    }
`;

export const CopyrightGraySpan = styled.span`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.neutral.darkGray};

    @media (min-width: 460px) {
        font-size: 14px;
    }

    @media (min-width: 540px) {
        font-size: 16px;
    }
`;

export const CopyrightRegularSpan = styled(CopyrightGraySpan)`
    @media (min-width: 640px) {
        color: ${({ theme }) => theme.colors.main.black};
    }
`;
