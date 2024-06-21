import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Checkbox, ErrorMessage, Form, Input, Label } from "./styled";
import { ArrowLRightIcon } from "@/assets";
import { sendNewsletter } from "@/utils";
import { EMAIL_PATTERN } from "@/constants";
import { FooterFormInputs } from "../types";

export function FooterForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<FooterFormInputs>();

    const onSubmit: SubmitHandler<FooterFormInputs> = (data) => {
        console.log(data);
        sendNewsletter(data.email);
        reset();
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
                type="text"
                placeholder="Give an email, get the newsletter."
                {...register("email", {
                    required: "Email is required",
                    pattern: {
                        value: EMAIL_PATTERN,
                        message: "Enter valid email"
                    }
                })}
            />

            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

            <Button type="submit">
                <img src={ArrowLRightIcon} alt="Submit" />
            </Button>

            <Label>
                <Checkbox type="checkbox" />
                <span>i agree to the website’s terms and conditions</span>{" "}
            </Label>
        </Form>
    );
}
