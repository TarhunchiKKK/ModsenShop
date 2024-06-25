import { useGetProductsQuery, useGetSliderImagesQuery } from "@/store";
import { Slider } from "./Slider";
import { Container, Title } from "@/components";
import {
    FirstSection,
    SecondSection,
    SecondSectionContentWrapper,
    SecondSectionTitleWrapper,
    ViewAllSpan,
} from "./styled";
import { HOME_PAGE_PRODUCTS_LIMIT } from "./constants";
import { ProductsContainer } from "@/components";
import { Link } from "react-router-dom";
import { FULL_SCREEN_CARD_SCALING_FACTOR, routes } from "@/constants";

export function HomePage() {
    const { data: sliderProducts } = useGetSliderImagesQuery();
    const { data: products } = useGetProductsQuery({ limit: HOME_PAGE_PRODUCTS_LIMIT });

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
