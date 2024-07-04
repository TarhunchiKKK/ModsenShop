import { Link } from "react-router-dom";
import { productsApi } from "@/api";
import { Container, Title, ProductsContainer } from "@/components";
import { FULL_SCREEN_CARD_SCALING_FACTOR, routes } from "@/constants";
import { Slider } from "./Slider";
import { HOME_PAGE_PRODUCTS_LIMIT, SLIDES_COUNT } from "./constants";
import {
    FirstSection,
    SecondSection,
    SecondSectionContentWrapper,
    SecondSectionTitleWrapper,
    ViewAllSpan,
} from "./styled";

export function HomePage() {
    const { data: sliderProducts } = productsApi.useGetProductsQuery(SLIDES_COUNT);
    const { data: products } = productsApi.useGetProductsQuery(HOME_PAGE_PRODUCTS_LIMIT);

    return (
        <>
            <FirstSection>
                <Container>{sliderProducts && <Slider products={sliderProducts} />}</Container>
            </FirstSection>

            <SecondSection>
                <Container>
                    <SecondSectionContentWrapper>
                        <SecondSectionTitleWrapper>
                            <Title content="Shop The Latest" />

                            <Link to={routes.shop}>
                                <ViewAllSpan>View All</ViewAllSpan>
                            </Link>
                        </SecondSectionTitleWrapper>

                        {products && (
                            <ProductsContainer
                                products={products}
                                scalingKoefficient={FULL_SCREEN_CARD_SCALING_FACTOR}
                            />
                        )}
                    </SecondSectionContentWrapper>
                </Container>
            </SecondSection>
        </>
    );
}
