import React, { ChangeEvent, SyntheticEvent, useEffect, VFC } from "react";
import Button from "@/Components/Button";
import Guest from "@/Layouts/Guest";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import ValidationErrors from "@/Components/ValidationErrors";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import route from "ziggy-js";

type FormInput = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
};

const Register: VFC = () => {
    const { data, setData, post, processing, errors, reset } =
        useForm<FormInput>({
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
        });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setData(
            e.target.name as
                | "name"
                | "email"
                | "password"
                | "password_confirmation",
            e.target.type === "checkbox"
                ? e.target.checked + ""
                : e.target.value
        );
    };

    const submit = (e: SyntheticEvent) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <Guest>
            <Head title="登録" />

            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <div>
                    <Label forInput="name" value="ユーザー名" />

                    <Input
                        type="text"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="email" value="メールアドレス" />

                    <Input
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="password" value="パスワード" />

                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="mt-4">
                    <Label
                        forInput="password_confirmation"
                        value="パスワードをもう一度入力してください"
                    />

                    <Input
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route("login")}
                        className="underline text-sm text-gray-600 hover:text-gray-900"
                    >
                        登録済みの方はこちら
                    </Link>

                    <Button className="ml-4" processing={processing}>
                        登録
                    </Button>
                </div>
            </form>
        </Guest>
    );
};

export default Register;
