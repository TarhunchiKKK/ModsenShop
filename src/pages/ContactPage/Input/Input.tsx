import { FieldErrors, RegisterOptions, UseFormRegister } from "react-hook-form";
import { ErrorMessage, InputWrapper, StyledInput } from "./styled";
import { Inputs } from "../ContactPage";
import { EMAIL_PATTERN } from "@/constants";
import { capitalizeString } from "@/utils";

interface IInputProps {
    placeholder: string;
    padding?: string;
    name: "firstName" | "lastName" | "email" | "subject" | "message";
    register: UseFormRegister<Inputs>;
    errors: FieldErrors<Inputs>;
}

export function Input({ placeholder, padding = "12px", name, register, errors }: IInputProps) {
    const options: RegisterOptions<
        Inputs,
        "firstName" | "lastName" | "email" | "subject" | "message"
    > = {
        required: capitalizeString(`${name} is required`)
    };

    if (name === "email") {
        options.pattern = {
            value: EMAIL_PATTERN,
            message: "Enter valid email"
        };
    }

    return (
        <InputWrapper>
            <StyledInput
                style={{ paddingBottom: padding }}
                type="text"
                placeholder={placeholder}
                {...register(name, options)}
            />

            {errors[name] && <ErrorMessage>{errors[name].message}</ErrorMessage>}
        </InputWrapper>
    );
}
