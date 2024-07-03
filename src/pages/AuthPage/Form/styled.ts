import { styled } from "styled-components";

export const Form = styled.form`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 2px solid ${({ theme }) => theme.colors.neutral.gray};
    border-radius: 4px;

    width: 90%;
    padding: 20px 16px 26px;

    @media (min-width: 580px) {
        width: 480px;
        padding: 30px 20px 36px;
    }
`;

export const InputWrapper = styled.div`
    margin-bottom: 20px;

    &:last-of-type {
        margin-bottom: 30px;
    }

    @media (min-width: 580px) {
        margin-bottom: 30px;

        &:last-of-type {
            margin-bottom: 40px;
        }
    }
`;

export const Input = styled.input`
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.gray};
    outline: none;

    width: 100%;
    padding: 2px 0px 8px;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 16px;
`;

export const AuthorizationWrapper = styled.div`
    margin-bottom: 15px;

    @media (min-width: 580px) {
        margin-bottom: 30px;
    }
`;

export const AuthorizationText = styled.p`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 14px;
    color: ${({ theme }) => theme.colors.neutral.darkGray};
    text-align: center;
`;

export const AuthProvidersContainer = styled.div`
    margin: 20px auto 0px;
    max-width: 70%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const AuthProviderWrapper = styled.button`
    padding: 4px;
    width: 40px;
    height: 40px;
    border: 1px solid ${({ theme }) => theme.colors.neutral.darkGray};
    border-radius: 50%;
    position: relative;
    background: ${({ theme }) => theme.colors.main.white};

    cursor: pointer;
    &:hover {
        background-color: ${({ theme }) => theme.colors.neutral.lightGray};
        transition: ${({ theme }) => theme.transitions.buttons};
    }
`;

export const AuthProviderIcon = styled.img`
    width: 100%;
    height: 100%;
`;

export const SubmitButton = styled.button`
    display: block;
    margin: 0px auto 30px;

    padding: 6px 24px;

    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 16px;
    font-weight: 700;

    border: 1px solid ${({ theme }) => theme.colors.main.black};
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.main.white};
    background-color: ${({ theme }) => theme.colors.main.black};

    cursor: pointer;
    &:hover {
        color: ${({ theme }) => theme.colors.main.black};
        background-color: ${({ theme }) => theme.colors.main.white};
        transition: ${({ theme }) => theme.transitions.buttons};
    }
`;

export const QuestionButton = styled.button`
    border: none;
    background: none;
    display: block;
    margin: auto;

    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 12px;
    color: ${({ theme }) => theme.colors.neutral.darkGray};
    cursor: pointer;
`;
