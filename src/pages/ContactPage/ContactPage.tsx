import { Container, Title } from "@/components";
import { Form } from "./Form";
import { ContentWrapper, Description, Section, Wrapper } from "./styled";

export type Inputs = {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    message: string;
};

export function ContactPage() {
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

                        <Form />
                    </ContentWrapper>
                </Wrapper>
            </Container>
        </Section>
    );
}
