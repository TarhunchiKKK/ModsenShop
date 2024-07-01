import { PRODUCT_SORT_ORDERS } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductFiltersState {
    title: string;
    category: string;
    sortOrder: PRODUCT_SORT_ORDERS;
    minPrice: number;
    maxPrice: number;
}

const initialState: ProductFiltersState = {
    title: "",
    category: "",
    sortOrder: PRODUCT_SORT_ORDERS.TITLE_ASC,
    minPrice: 0,
    maxPrice: Infinity,
};

export const productFiltersSlice = createSlice({
    name: "productFilters",
    initialState,
    reducers: {
        setTitle(state, action: PayloadAction<string>) {
            state.title = action.payload;
        },
        setCategory(state, action: PayloadAction<string>) {
            state.category = action.payload;
        },
        setSortOrder(state, action: PayloadAction<PRODUCT_SORT_ORDERS>) {
            state.sortOrder = action.payload;
        },
        setMinPrice(state, action: PayloadAction<number>) {
            state.minPrice = action.payload;
        },
        setMaxPrice(state, action: PayloadAction<number>) {
            state.maxPrice = action.payload;
        },
        setFilters(state, action: PayloadAction<ProductFiltersState>) {
            state = { ...action.payload };
        },
    },
});

export const { setTitle, setCategory, setSortOrder, setMinPrice, setMaxPrice, setFilters } =
    productFiltersSlice.actions;
