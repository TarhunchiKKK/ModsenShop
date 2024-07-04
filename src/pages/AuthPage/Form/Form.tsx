import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GoogleIcon } from "@/assets";
import { routes } from "@/constants";
import { setUser } from "@/store";
import { FirebaseContext } from "@/contexts";
import * as Styled from "./styled";

export function Form() {
    const { authWithGoogle, authWithPassword, registerWithPassword } = useContext(FirebaseContext);
    const dispatch = useDispatch();
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const authFunction = isLogin ? authWithPassword : registerWithPassword;
        const result = await authFunction(email, password);
        console.log(result);
        if (result.success) {
            dispatch(
                setUser({
                    id: result.user.uid,
                    email: result.user.email,
                    token: result.user.refreshToken,
                }),
            );
            navigate(routes.home);
        } else {
            navigate(routes.error);
        }
    };

    const handleAuthWithGoogle = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const result = await authWithGoogle();
        console.log(result);
        if (result.success) {
            dispatch(
                setUser({
                    id: result.user.uid,
                    email: result.user.email,
                    token: result.user.refreshToken,
                }),
            );
            navigate(routes.home);
        } else {
            navigate(routes.error);
        }
    };

    return (
        <Styled.Form onSubmit={handleSubmit}>
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

            <Styled.SubmitButton>{isLogin ? "Login" : "Register"}</Styled.SubmitButton>

            <Styled.QuestionButton onClick={handleChangeOperation}>
                {isLogin ? "Don't have an account?" : "Already have an account?"}
            </Styled.QuestionButton>
        </Styled.Form>
    );
}
