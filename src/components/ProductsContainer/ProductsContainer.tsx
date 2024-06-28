import { Wrapper } from "./styled";
import { ProductCard } from "./ProductCard";
import { IProductsContainerProps } from "./props";

export function ProductsContainer({ products, scalingKoefficient }: IProductsContainerProps) {
    return (
        <Wrapper $scalingKoefficient={scalingKoefficient}>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </Wrapper>
    );
}
