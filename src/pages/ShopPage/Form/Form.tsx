import { PRODUCT_SORT_ORDERS } from "@/types";
import { Dropdown } from "./Dropdown";
import { Input } from "./Input";
import { IFormProps } from "./props";
import { Range } from "./Range";
import { useMediaQuery } from "@/utils";
import { HIDE_FORM_BREAKPOINT } from "../constants";
import { useState } from "react";
import * as Styled from "./styled";
import { FiltersIcon } from "@/assets";

export function Form({ categories, minPrice, maxPrice }: IFormProps) {
    const { isMatch: isFormHidden } = useMediaQuery(HIDE_FORM_BREAKPOINT);
    const [isFormOpen, setIsFormOpen] = useState<boolean>(false);

    const handleOpenForm = () => {
        setIsFormOpen((prev) => !prev);
    };

    return (
        <>
            <Styled.Form $isVisible={isFormOpen || !isFormHidden}>
                <Input marginBottom={39} />

                <Dropdown
                    options={categories.map((category) => ({
                        value: category,
                        label: category,
                    }))}
                    defaultValue={"Shop By"}
                    marginBottom={16}
                />

                <Dropdown
                    options={Object.values(PRODUCT_SORT_ORDERS).map((order) => ({
                        value: order,
                        label: order,
                    }))}
                    defaultValue={"Sort By"}
                    marginBottom={39}
                />

                <Range minValue={minPrice} maxValue={maxPrice} step={(maxPrice - minPrice) / 15} />
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
