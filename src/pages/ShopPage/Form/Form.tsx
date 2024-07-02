import { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilters } from "@/store";
import { FiltersIcon } from "@/assets";
import { useMediaQuery } from "@/utils";
import { PRODUCT_SORT_ORDERS } from "@/types";
import { Dropdown } from "./Dropdown";
import { Input } from "./Input";
import { IFormProps } from "./props";
import { Range } from "./Range";
import * as Styled from "./styled";
import { FilterFormInputs } from "../types";
import { HIDE_FORM_BREAKPOINT } from "../constants";

export function Form({ categories, minPrice, maxPrice }: IFormProps) {
    const dispatch = useDispatch();

    const { isMatch: isFormHidden } = useMediaQuery(HIDE_FORM_BREAKPOINT);
    const [isFormOpen, setIsFormOpen] = useState<boolean>(false);

    const handleOpenForm = () => {
        setIsFormOpen((prev) => !prev);
    };

    const [formState, setFormState] = useState<FilterFormInputs>({
        title: "",
        category: "",
        sortOrder: PRODUCT_SORT_ORDERS.RATE_DESC,
        minPrice: minPrice,
        maxPrice: maxPrice,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(setFilters({ ...formState }));
    };

    const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormState({ ...formState, title: e.target.value });
    };

    const handleChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFormState({ ...formState, category: e.target.value });
    };

    const handleChangeSortOrder = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFormState({ ...formState, sortOrder: e.target.value as PRODUCT_SORT_ORDERS });
    };

    const handleChangePrice = (min: number, max: number) => {
        setFormState({ ...formState, minPrice: min, maxPrice: max });
    };

    return (
        <>
            <Styled.Form $isVisible={isFormOpen || !isFormHidden} onSubmit={handleSubmit}>
                <Input value={formState.title} onChange={handleChangeTitle} marginBottom={39} />

                <Dropdown
                    options={categories.map((category) => ({
                        value: category,
                        label: category,
                    }))}
                    value={formState.category}
                    onChange={handleChangeCategory}
                    marginBottom={16}
                />

                <Dropdown
                    options={Object.values(PRODUCT_SORT_ORDERS).map((order) => ({
                        value: order,
                        label: order,
                    }))}
                    value={formState.sortOrder}
                    onChange={handleChangeSortOrder}
                    marginBottom={39}
                />

                <Range
                    minValue={minPrice}
                    maxValue={maxPrice}
                    step={(maxPrice - minPrice) / 15}
                    value={{ min: formState.minPrice, max: formState.maxPrice }}
                    onChange={handleChangePrice}
                />

                <Styled.Button $isRelative={false}>Filter</Styled.Button>
            </Styled.Form>

            {!isFormOpen && isFormHidden && (
                <Styled.FiltersWrapper onClick={handleOpenForm}>
                    <Styled.Icon src={FiltersIcon} />
                    <Styled.Button $isRelative={true}>Filters</Styled.Button>
                </Styled.FiltersWrapper>
            )}
        </>
    );
}
