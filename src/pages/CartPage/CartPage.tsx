import { Container, ProductsContainer, Title } from "@/components";
import { Section, TitleWrapper } from "./styled";
import { FULL_SCREEN_CARD_SCALING_FACTOR } from "@/constants";
import { useAppSelector } from "@/store";

export function CartPage() {
    const { products } = useAppSelector((state) => state.cart);

    return (
        <Section>
            <Container>
                <TitleWrapper>
                    <Title content="Cart" />
                </TitleWrapper>

                {products && (
                    <ProductsContainer
                        products={products.map((product) => product.data)}
                        scalingKoefficient={FULL_SCREEN_CARD_SCALING_FACTOR}
                    />
                )}
            </Container>
        </Section>
    );
}
