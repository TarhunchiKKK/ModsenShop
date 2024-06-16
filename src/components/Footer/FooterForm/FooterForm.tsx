import { SubmitHandler, useForm } from "react-hook-form";
import { ArrowLRightIcon } from "../../../assets";
import { Button, ErrorMessage, Form, Input } from "./styled";
import { sendNewsletter } from "../../../utils";

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
                        value: /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/,
                        message: "Enter valid email"
                    }
                })}
            />

            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

            <Button type="submit">
                {/* <ArrowLRightIcon /> */}
                <img src={ArrowLRightIcon} alt="Submit" />
            </Button>
        </Form>
    );
}
