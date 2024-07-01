import { useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, IconThemeWrapper, ProductsContainer } from "@/components";
import { FULL_SCREEN_CARD_SCALING_FACTOR, routes } from "@/constants";
import { productsApi, useGetProductByIdQuery } from "@/store";
import { AngleIconDark, AngleIconLight } from "@/assets";
import { Slider } from "./Slider";
import { ProductInfo } from "./ProductInfo";
import { ProductDescription } from "./ProductDescription";
import {
    AngleWrapper,
    ContinueShoppingSpan,
    ContinueShoppingWrapper,
    InfoWrapper,
    ProductContainerTittle,
    ProductContainerWrapper,
    Section,
} from "./styled";
import { ErrorPage } from "../ErrorPage";

export function ProductPage() {
    const { id } = useParams();

    const { data: product, isError } = useGetProductByIdQuery(id as string);
    const slides: string[] = useMemo(() => new Array(4).fill(product?.image), [product]);

    const [fetchSimilarProducts, { data: similarProducts }] =
        productsApi.useLazyGetProductsByCategoryQuery();

    useEffect(() => {
        if (product) {
            fetchSimilarProducts(product.category);
        }
    }, [product, fetchSimilarProducts]);

    if (!id || isError) {
        return <ErrorPage />;
    }

    return (
        <Section>
            <Container>
                {product && (
                    <>
                        <InfoWrapper>
                            <Slider slides={slides} />
                            <ProductInfo product={product} />
                        </InfoWrapper>

                        <ProductDescription description={product.description!} />
                    </>
                )}

                <ProductContainerWrapper>
                    <ProductContainerTittle>Similar Items</ProductContainerTittle>

                    {similarProducts && (
                        <ProductsContainer
                            products={similarProducts}
                            scalingKoefficient={FULL_SCREEN_CARD_SCALING_FACTOR}
                        />
                    )}
                </ProductContainerWrapper>

                <Link to={routes.shop}>
                    <ContinueShoppingWrapper>
                        <ContinueShoppingSpan>Continue shopping</ContinueShoppingSpan>

                        <AngleWrapper>
                            <IconThemeWrapper srcLight={AngleIconDark} srcDark={AngleIconLight} />
                        </AngleWrapper>
                    </ContinueShoppingWrapper>
                </Link>
            </Container>
        </Section>
    );
}
