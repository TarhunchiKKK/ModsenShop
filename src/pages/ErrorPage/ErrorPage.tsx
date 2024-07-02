import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { routes } from "@/constants";
import { Container, Footer, Header, Title } from "@/components";
import { getSectionHeight } from "./helpers";
import { Button, ContentText, ContentWrapper, Wrapper } from "./styled";

export function ErrorPage() {
    const [height, setHeight] = useState<string>("");

    useEffect(() => {
        setHeight(getSectionHeight());
    }, []);

    return (
        <>
            <Header />

            <section style={{ height }}>
                <Container style={{ height: "100%" }}>
                    <Wrapper>
                        <ContentWrapper>
                            <Title content="404 ERROR" />

                            <ContentText>
                                This page not found; back to home and start again
                            </ContentText>

                            <Link to={routes.home}>
                                <Button>HOMEPAGE</Button>
                            </Link>
                        </ContentWrapper>
                    </Wrapper>
                </Container>
            </section>

            <Footer />
        </>
    );
}
