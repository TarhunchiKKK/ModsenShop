import { useGetSliderImagesQuery } from "@/store";
import { Slider } from "./Slider";
import { Container } from "@/components";
import { FirstSection } from "./styled";

export function HomePage() {
    const { data: sliderProducts } = useGetSliderImagesQuery();

    return (
        <>
            <FirstSection>
                <Container>{sliderProducts && <Slider products={sliderProducts} />}</Container>
            </FirstSection>
            <section></section>
        </>
    );
}
