import { Container, Title } from "@/components";
import { Input } from "./Input";
import {
    Button,
    ContentWrapper,
    Description,
    FirstInputsPairWrapper,
    SecondInputsPairWrapper,
    Section,
    Wrapper
} from "./styled";

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

                        <FirstInputsPairWrapper>
                            <Input placeholder="First name" />
                            <Input placeholder="Last name" />
                        </FirstInputsPairWrapper>

                        <SecondInputsPairWrapper>
                            <Input placeholder="Email" />
                            <Input placeholder="Subject" />
                        </SecondInputsPairWrapper>

                        <Input padding="44px" placeholder="Message" />

                        <Button>Send</Button>
                    </ContentWrapper>
                </Wrapper>
            </Container>
        </Section>
    );
}
