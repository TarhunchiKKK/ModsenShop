import { Range } from "./Range";

export function Form() {
    return <Range minValue={0} maxValue={200} step={10}></Range>;
}
