import { useContext, useState } from "react";
import * as Styled from "./styled";
import { GoogleIcon } from "@/assets";
import { FirebaseContext } from "@/firebase";
import { useNavigate } from "react-router-dom";
import { routes } from "@/constants";

export function Form() {
    const { authWithGoogle } = useContext(FirebaseContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isLogin, setIsLogin] = useState<boolean>(true);

    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleChangeOperation = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsLogin(!isLogin);
    };

    const handleAuthWithGoogle = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const result = await authWithGoogle();
        console.log(result);
        if (result.success) {
            navigate(routes.home);
        } else {
            navigate(routes.error);
        }
    };

    return (
        <Styled.Form>
            <Styled.InputWrapper>
                <Styled.Input
                    type="text"
                    placeholder="Email..."
                    value={email}
                    onChange={handleChangeEmail}
                />
            </Styled.InputWrapper>

            <Styled.InputWrapper>
                <Styled.Input
                    type="password"
                    placeholder="Password..."
                    value={password}
                    onChange={handleChangePassword}
                />
            </Styled.InputWrapper>

            <Styled.AuthorizationWrapper>
                <Styled.AuthorizationText>Or continue with:</Styled.AuthorizationText>

                <Styled.AuthProvidersContainer>
                    <Styled.AuthProviderWrapper onClick={handleAuthWithGoogle}>
                        <Styled.AuthProviderIcon src={GoogleIcon} />
                    </Styled.AuthProviderWrapper>
                </Styled.AuthProvidersContainer>
            </Styled.AuthorizationWrapper>

            <Styled.SubmitButton>Login</Styled.SubmitButton>

            <Styled.QuestionButton onClick={handleChangeOperation}>
                {isLogin ? "Don't have an account?" : "Already have an account?"}
            </Styled.QuestionButton>
        </Styled.Form>
    );
}
