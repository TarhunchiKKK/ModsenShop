import { FieldErrors, UseFormRegister } from "react-hook-form";
import { ContactFormInputs } from "../types";

export interface IInputProps {
    placeholder: string;
    isMessageField?: boolean;
    name: "firstName" | "lastName" | "email" | "subject" | "message";
    register: UseFormRegister<ContactFormInputs>;
    errors: FieldErrors<ContactFormInputs>;
}
