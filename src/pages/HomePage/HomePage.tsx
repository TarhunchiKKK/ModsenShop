import { useGetSliderImagesQuery } from "@/store";
import { Slider } from "./Slider";

export function HomePage() {
    const { data: sliderProducts } = useGetSliderImagesQuery();

    return (
        <>
            <section>{sliderProducts && <Slider products={sliderProducts} />}</section>
            <section></section>
        </>
    );
}
