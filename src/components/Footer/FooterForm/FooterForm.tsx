import { SubmitHandler, useForm } from "react-hook-form";
import { ArrowLRightIcon } from "../../../assets";
import { Button, ErrorMessage, Form, Input } from "./styled";

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
                        value: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
                        message: "Enter valid email"
                    }
                })}
            />

            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

            <Button type="submit">
                <ArrowLRightIcon />
            </Button>
        </Form>
    );
}
