import styled from "styled-components";

export const StyledFooter = styled.footer``;

export const FooterContentWrapper = styled.div`
    padding: 40px 0px 92px;
    border-top: 1px solid #d8d8d8;
`;

export const FooterContentFirst = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const FooterLinksWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 41px;
`;

export const FooterContentSecond = styled(FooterContentFirst)`
    margin-top: 48px;
`;

export const CopyrightGraySpan = styled.span`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 16px;
    font-weight: 400;
    color: var(--color-secondary);
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
`;
