import { Container, Title } from "@/components";
import { Input } from "./Input";
import {
    Button,
    ContentWrapper,
    Description,
    FirstInputsPairWrapper,
    SecondInputsPairWrapper,
    Section,
    Wrapper,
    Form
} from "./styled";
import { SubmitHandler, useForm } from "react-hook-form";
import { sendIdea } from "@/utils";

export type Inputs = {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    message: string;
};

export function ContactPage() {
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
        <Section>
            <Container style={{ height: "100%" }}>
                <Wrapper>
                    <ContentWrapper>
                        <Title content="Contact Us" />

                        <Description>
                            Say Hello send us your thoughts about our products or share your ideas
                            with our Team!
                        </Description>

                        <Form onSubmit={handleSubmit(onSubmit)}>
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
                                <Input
                                    name="email"
                                    placeholder="Email"
                                    register={register}
                                    errors={errors}
                                />
                                <Input
                                    name="subject"
                                    placeholder="Subject"
                                    register={register}
                                    errors={errors}
                                />
                            </SecondInputsPairWrapper>

                            <Input
                                name="message"
                                placeholder="Message"
                                register={register}
                                errors={errors}
                                padding="44px"
                            />

                            <Button type="submit">Send</Button>
                        </Form>
                    </ContentWrapper>
                </Wrapper>
            </Container>
        </Section>
    );
}
