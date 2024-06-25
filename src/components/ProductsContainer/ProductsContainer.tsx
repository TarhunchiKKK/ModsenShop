import { IProduct } from "@/types";
import { Wrapper } from "./styled";
import { ProductCard } from "./ProductCard";

interface IProductsContainerProps {
    products: IProduct[];
    scalingKoefficient: number;
}

export function ProductsContainer({ products, scalingKoefficient }: IProductsContainerProps) {
    return (
        <Wrapper $scalingKoefficient={scalingKoefficient}>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </Wrapper>
    );
}
