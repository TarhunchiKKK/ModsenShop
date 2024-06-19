import { SubmitHandler, useForm } from "react-hook-form";
import { Button, ErrorMessage, Form, Input } from "./styled";
import { ArrowLRightIcon } from "@/assets";
import { sendNewsletter } from "@/utils";
import { EMAIL_PATTERN } from "@/constants";

type Inputs = {
    email: string;
};

export function FooterForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
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
        </Form>
    );
}
