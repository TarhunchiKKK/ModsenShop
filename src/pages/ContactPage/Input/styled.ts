import styled from "styled-components";

export const InputWrapper = styled.div`
    position: relative;
    width: 100%;
`;

export const StyledInput = styled.input<{ $isMessage: boolean }>`
    width: 100%;

    outline: none;
    border: none;
    border-bottom: 1px solid #d8d8d8;
    background: inherit;

    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 16px;
    color: ${({ theme }) => theme.colors.neutral.darkGray};

    padding-bottom: ${(props) => (props.$isMessage ? "65px" : "5px")};

    @media (min-width: 640px) {
        padding-bottom: ${(props) => (props.$isMessage ? "54px" : "8px")};
    }

    @media (min-width: 1024px) {
        padding-bottom: ${(props) => (props.$isMessage ? "44px" : "12px")};
    }
`;

export const ErrorMessage = styled.span`
    position: absolute;
    top: calc(100% + 4px);
    left: 0;

    color: ${({ theme }) => theme.colors.service.error};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: 300;
    font-size: 14px;
`;

export const ResetIcon = styled.img`
    position: absolute;
    right: 0px;
    bottom: 10px;
    display: block;

    @media (min-width: 640px) {
        display: none;
    }
`;
