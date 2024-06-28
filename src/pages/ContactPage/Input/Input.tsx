import { RegisterOptions } from "react-hook-form";
import { ErrorMessage, InputWrapper, ResetIcon, StyledInput } from "./styled";
import { EMAIL_PATTERN } from "@/constants";
import { capitalizeString } from "@/utils";
import { ResetInputIcon } from "@/assets";
import { useState } from "react";
import { ContactFormInputs } from "../types";
import { IInputProps } from "./props";

export function Input({
    placeholder,
    name,
    register,
    errors,
    isMessageField = false,
}: IInputProps) {
    const [isActive, setIsActive] = useState<boolean>(false);

    const options: RegisterOptions<
        ContactFormInputs,
        "firstName" | "lastName" | "email" | "subject" | "message"
    > = {
        required: capitalizeString(`${name} is required`),
    };

    if (name === "email") {
        options.pattern = {
            value: EMAIL_PATTERN,
            message: "Enter valid email",
        };
    }

    const handleInputFocus = () => {
        setIsActive(true);
    };

    const handleInputBlur = () => {
        setIsActive(false);
    };

    return (
        <InputWrapper>
            <StyledInput
                type="text"
                placeholder={placeholder}
                $isMessage={isMessageField}
                {...register(name, options)}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
            />

            {isActive && <ResetIcon src={ResetInputIcon} />}

            {errors[name] && <ErrorMessage>{errors[name]!.message}</ErrorMessage>}
        </InputWrapper>
    );
}
