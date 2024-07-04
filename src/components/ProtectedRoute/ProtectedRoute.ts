import { useAuth } from "@/utils";
import { IProtectedRouteProps } from "./props";
import { useNavigate } from "react-router-dom";
import { routes } from "@/constants";

export function ProtectedRoute({ children }: IProtectedRouteProps) {
    const isAuth = useAuth();
    const navigate = useNavigate();

    if (!isAuth) {
        navigate(routes.auth);
    }

    return children;
}
