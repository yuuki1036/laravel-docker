import React, { ChangeEvent, SyntheticEvent, useEffect, VFC } from "react";
import Button from "@/Components/Button";
import Guest from "@/Layouts/Guest";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import ValidationErrors from "@/Components/ValidationErrors";
import { Head, useForm } from "@inertiajs/inertia-react";
import route from "ziggy-js";

const ConfirmPassword: VFC = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setData("password", e.target.value);
    };

    const submit = (e: SyntheticEvent) => {
        e.preventDefault();

        post(route("password.confirm"));
    };

    return (
        <Guest>
            <Head title="Confirm Password" />

            <div className="mb-4 text-sm text-gray-600">
                続けるにはパスワードの確認が必要です。
            </div>

            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <div className="mt-4">
                    <Label forInput="password" value="Password" />

                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        isFocused={true}
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Button className="ml-4" processing={processing}>
                        Confirm
                    </Button>
                </div>
            </form>
        </Guest>
    );
};

export default ConfirmPassword;
