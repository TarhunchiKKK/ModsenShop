import { FieldErrors, RegisterOptions, UseFormRegister } from "react-hook-form";
import { ErrorMessage, InputWrapper, ResetIcon, StyledInput } from "./styled";
import { Inputs } from "../ContactPage";
import { EMAIL_PATTERN } from "@/constants";
import { capitalizeString } from "@/utils";
import { ResetInputIcon } from "@/assets";

interface IInputProps {
    placeholder: string;
    isMessageField?: boolean;
    name: "firstName" | "lastName" | "email" | "subject" | "message";
    register: UseFormRegister<Inputs>;
    errors: FieldErrors<Inputs>;
}

export function Input({
    placeholder,
    name,
    register,
    errors,
    isMessageField = false
}: IInputProps) {
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
                type="text"
                placeholder={placeholder}
                $isMessage={isMessageField}
                {...register(name, options)}
            />

            <ResetIcon src={ResetInputIcon} />

            {errors[name] && <ErrorMessage>{errors[name]!.message}</ErrorMessage>}
        </InputWrapper>
    );
}
