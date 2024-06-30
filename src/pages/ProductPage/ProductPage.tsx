import { Container, ProductsContainer } from "@/components";
import { InfoWrapper, ProductContainerTittle, ProductContainerWrapper, Section } from "./styled";
import { Slider } from "./Slider";
import { ProductInfo } from "./ProductInfo";
import { IProduct } from "@/types";
import { ProductDescription } from "./ProductDescription";
import { FULL_SCREEN_CARD_SCALING_FACTOR } from "@/constants";

export function ProductPage() {
    return (
        <Section>
            <Container>
                <InfoWrapper>
                    <Slider slides={[""]} />
                    <ProductInfo product={{} as IProduct} />
                </InfoWrapper>

                <ProductDescription description="" />

                <ProductContainerWrapper>
                    <ProductContainerTittle>Similar Items</ProductContainerTittle>

                    <ProductsContainer
                        products={[] as IProduct[]}
                        scalingKoefficient={FULL_SCREEN_CARD_SCALING_FACTOR}
                    />
                </ProductContainerWrapper>
            </Container>
        </Section>
    );
}
