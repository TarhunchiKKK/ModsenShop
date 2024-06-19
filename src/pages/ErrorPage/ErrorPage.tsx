import { useEffect, useState } from "react";
import { getSectionHeight } from "./helpers";
import { Button, ContentText, ContentWrapper, Wrapper } from "./styled";
import { Container, Title } from "@/components";

export function ErrorPage() {
    const [height, setHeight] = useState<string>("");

    useEffect(() => {
        setHeight(getSectionHeight());
    }, []);

    return (
        <section style={{ height }}>
            <Container style={{ height: "100%" }}>
                <Wrapper>
                    <ContentWrapper>
                        <Title content="404 ERROR" />
                        <ContentText>This page not found; back to home and start again</ContentText>
                        <Button>HOMEPAGE</Button>
                    </ContentWrapper>
                </Wrapper>
            </Container>
        </section>
    );
}
