import { Container, ProductsContainer, Title } from "@/components";
import { ContentWrapper, FormWrapper, Section } from "./styled";
import { Form } from "./Form";
import { IProduct } from "@/types";
import { FULL_SCREEN_CARD_SCALING_FACTOR } from "@/constants";

export function ShopPage() {
    return (
        <Section>
            <Container>
                <Title content="Shop The Latest" />
                <ContentWrapper>
                    <FormWrapper>
                        <Form />
                    </FormWrapper>

                    {/* <ProductsContainer
                        products={[] as IProduct[]}
                        scalingKoefficient={FULL_SCREEN_CARD_SCALING_FACTOR}
                    /> */}
                </ContentWrapper>
            </Container>
        </Section>
    );
}
