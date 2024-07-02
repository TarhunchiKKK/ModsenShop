import { IProduct } from "@/types";
import { productsApi, useAppSelector } from "@/store";
import { Container, ProductsContainer, Title } from "@/components";
import { filterProducts, getExtremePrices, useMediaQuery } from "@/utils";
import { FULL_SCREEN_CARD_SCALING_FACTOR, PART_SCREEN_CARD_SCALING_FACTOR } from "@/constants";
import { Form } from "./Form";
import { ContentWrapper, FormWrapper, Section } from "./styled";
import { CHANCGE_SCALING_BREAKPOINT, PRODUCTS_COUNT } from "./constants";

export function ShopPage() {
    const { data: categories } = productsApi.useGetCategoriesQuery();
    const { data: products } = productsApi.useGetProductsQuery(PRODUCTS_COUNT);

    const { isMatch: isContainerOnFullScreen } = useMediaQuery(CHANCGE_SCALING_BREAKPOINT);

    const filters = useAppSelector((state) => state.productFilters);
    const filteredProducts: IProduct[] = products ? filterProducts(products, filters) : [];

    return (
        <Section>
            <Container>
                <Title content="Shop The Latest" />

                <ContentWrapper>
                    <FormWrapper>
                        {categories && products && (
                            <Form categories={categories} {...getExtremePrices(products)} />
                        )}
                    </FormWrapper>

                    {filteredProducts.length && (
                        <ProductsContainer
                            products={filteredProducts}
                            scalingKoefficient={
                                isContainerOnFullScreen
                                    ? FULL_SCREEN_CARD_SCALING_FACTOR
                                    : PART_SCREEN_CARD_SCALING_FACTOR
                            }
                        />
                    )}
                </ContentWrapper>
            </Container>
        </Section>
    );
}
