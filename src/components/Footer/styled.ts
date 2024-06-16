import styled from "styled-components";

export const StyledFooter = styled.footer``;

export const FooterContentWrapper = styled.div`
    padding: 40px 0px 92px;
    border-top: 1px solid #d8d8d8;
`;

export const FooterContentFirst = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 30px;

    @media (min-width: 768px) {
        flex-direction: row;
        gap: 30px;
    }
`;

export const FooterLinksWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 98%;

    @media (min-width: 460px) {
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
    align-items: center;
    margin-top: 30px;
    gap: 18px;

    @media (min-width: 460px) {
        flex-direction: row;
        gap: 10px;
    }

    @media (min-width: 768px) {
        margin-top: 48px;
    }
`;

export const CopyrightGraySpan = styled.span`
    font-family: var(--font-primary);
    font-size: 14px;
    font-weight: 400;
    color: var(--color-secondary);

    @media (min-width: 360px) {
        font-size: 16px;
    }

    @media (min-width: 460px) {
        font-size: 14px;
    }

    @media (min-width: 540px) {
        font-size: 16px;
    }
`;

export const CopyrightRegularSpan = styled(CopyrightGraySpan)`
    color: var(--color-primary);
`;

export const FooterIconsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 29.5px;

    @media (min-width: 460px) {
        gap: 24px;
    }

    @media (min-width: 540px) {
        gap: 29.5px;
    }
`;
