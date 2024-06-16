import { Container, Footer, Header, Title } from "../../components";
import { getSectionHeight } from "../helpers";
import { Wrapper } from "./styled";

export function ErrorPage() {
    return (
        <>
            <Header />

            <section style={{ height: getSectionHeight() }}>
                <Container>
                    <Wrapper>
                        <Title content="404 ERROR" />
                    </Wrapper>
                </Container>
            </section>

            <Footer />
        </>
    );
}
