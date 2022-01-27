import React, { ChangeEvent, SyntheticEvent, useEffect, VFC } from "react";
import Button from "@/Components/Button";
import Guest from "@/Layouts/Guest";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import ValidationErrors from "@/Components/ValidationErrors";
import { Head, useForm } from "@inertiajs/inertia-react";
import route from "ziggy-js";

type Props = {
    token: string;
    email: string;
};

type FormInput = {
    token: string;
    email: string;
    password: string;
    password_confirmation: string;
};

const ResetPassword: VFC<Props> = ({ token, email }) => {
    const { data, setData, post, processing, errors, reset } =
        useForm<FormInput>({
            token: token,
            email: email,
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
                | "email"
                | "password"
                | "password_confirmation"
                | "token",
            e.target.value
        );
    };

    const submit = (e: SyntheticEvent) => {
        e.preventDefault();

        post(route("password.update"));
    };

    return (
        <Guest>
            <Head title="パスワードリセット" />

            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <div>
                    <Label forInput="email" value="メールアドレス" />

                    <Input
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        handleChange={onHandleChange}
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
                        isFocused={true}
                        handleChange={onHandleChange}
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
                        autoComplete="new-password"
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Button className="ml-4" processing={processing}>
                        パスワードリセット
                    </Button>
                </div>
            </form>
        </Guest>
    );
};

export default ResetPassword;
