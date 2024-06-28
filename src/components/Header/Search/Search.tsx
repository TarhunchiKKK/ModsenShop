import { SearchIconGray } from "@/assets";
import { Form, Input } from "./styled";
import { SubmitHandler, useForm } from "react-hook-form";
import { SearchInputs } from "../types";

export function Search() {
    const { register, handleSubmit, reset } = useForm<SearchInputs>();

    const onSubmit: SubmitHandler<SearchInputs> = (data) => {
        console.log(data);
        reset();
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <img src={SearchIconGray} alt="Search" />

            <Input {...register("search")} placeholder="Search" />
        </Form>
    );
}
