import { sendIdea } from "@/utils";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, FirstInputsPairWrapper, SecondInputsPairWrapper, StyledForm } from "./styled";
import { Input } from "../Input";

export type Inputs = {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    message: string;
};

export function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
        sendIdea(data);
        reset();
    };
    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <FirstInputsPairWrapper>
                <Input
                    name="firstName"
                    placeholder="First name"
                    register={register}
                    errors={errors}
                />
                <Input
                    name="lastName"
                    placeholder="Last name"
                    register={register}
                    errors={errors}
                />
            </FirstInputsPairWrapper>

            <SecondInputsPairWrapper>
                <Input name="email" placeholder="Email" register={register} errors={errors} />
                <Input name="subject" placeholder="Subject" register={register} errors={errors} />
            </SecondInputsPairWrapper>

            <Input
                name="message"
                placeholder="Message"
                register={register}
                errors={errors}
                isMessageField={true}
            />

            <Button type="submit">Send</Button>
        </StyledForm>
    );
}
