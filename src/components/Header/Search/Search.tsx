import { SearchIconGray } from "@/assets";
import { Form, Input } from "./styled";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
    search: string;
};

export function Search() {
    const { register, handleSubmit, reset } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
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
