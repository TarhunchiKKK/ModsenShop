import styled from "styled-components";

export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ContentText = styled.p`
    margin-top: 10px;
    margin-bottom: 24px;
    texp-aligh: center;
    width: 163px;

    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 12px;
    line-height: 20px;
    font-weight: 400;
    text-align: center;
    color: ${({ theme }) => theme.colors.neutral.darkGray};

    @media (min-width: 440px) {
        font-size: 16px;
        width: 275px;
    }

    @media (min-width: 540px) {
        font-size: 18px;
    }

    @media (min-width: 768px) {
        font-size: 20px;
        margin-top: 24px;
        margin-bottom: 64px;
    }
`;

export const Button = styled.button`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 12px;
    font-weight: 400;

    background: none;
    color: ${({ theme }) => theme.colors.main.black};
    border: 1px solid ${({ theme }) => theme.colors.main.black};
    border-radius: 4px;
    text-decoration: uppercase;

    padding: 6px 25px;
    cursor: pointer;

    @media (min-width: 768px) {
        padding: 16px 49px;
        font-size: 16px;
        font-weight: 700;
    }

    &:hover {
        background: ${({ theme }) => theme.colors.main.logo};
        transition: ${({ theme }) => theme.transitions.buttons};
    }
`;
