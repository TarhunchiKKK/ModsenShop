import { Container, ProductsContainer, Title } from "@/components";
import { Section, TitleWrapper } from "./styled";
import { cartApi } from "@/firebase";
import { FULL_SCREEN_CARD_SCALING_FACTOR } from "@/constants";

export function CartPage() {
    const { products } = cartApi.useGetCartsQuery();

    return (
        <Section>
            <Container>
                <TitleWrapper>
                    <Title content="Cart" />
                </TitleWrapper>

                {products && (
                    <ProductsContainer
                        products={products}
                        scalingKoefficient={FULL_SCREEN_CARD_SCALING_FACTOR}
                    />
                )}
            </Container>
        </Section>
    );
}
