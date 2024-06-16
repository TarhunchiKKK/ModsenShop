import { useEffect, useState } from "react";
import { Container, Title } from "../../components";
import { getSectionHeight } from "../helpers";
import { Button, ContentText, ContentWrapper, Wrapper } from "./styled";

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
