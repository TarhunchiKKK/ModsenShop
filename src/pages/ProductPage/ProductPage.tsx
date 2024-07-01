import { Container, ProductsContainer } from "@/components";
import { InfoWrapper, ProductContainerTittle, ProductContainerWrapper, Section } from "./styled";
import { Slider } from "./Slider";
import { ProductInfo } from "./ProductInfo";
import { IProduct } from "@/types";
import { ProductDescription } from "./ProductDescription";
import { FULL_SCREEN_CARD_SCALING_FACTOR } from "@/constants";
import { useParams } from "react-router-dom";
import { ErrorPage } from "../ErrorPage";
import { useMemo } from "react";
import { useGetProductByIdQuery } from "@/store";

export function ProductPage() {
    const { id } = useParams();
    const { data: product, isError } = useGetProductByIdQuery(id as string);
    const slides: string[] = useMemo(() => new Array(4).fill(product?.image), [product]);

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

                        <ProductContainerWrapper>
                            <ProductContainerTittle>Similar Items</ProductContainerTittle>

                            <ProductsContainer
                                products={[] as IProduct[]}
                                scalingKoefficient={FULL_SCREEN_CARD_SCALING_FACTOR}
                            />
                        </ProductContainerWrapper>
                    </>
                )}
            </Container>
        </Section>
    );
}
