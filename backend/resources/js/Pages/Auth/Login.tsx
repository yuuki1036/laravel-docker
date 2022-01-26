import React, { ChangeEvent, SyntheticEvent, useEffect, VFC } from "react";
import Button from "@/Components/Button";
import Checkbox from "@/Components/Checkbox";
import Guest from "@/Layouts/Guest";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import ValidationErrors from "@/Components/ValidationErrors";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import route from "ziggy-js";

type Props = {
    status: string;
    canResetPassword: boolean;
};

const Login: VFC<Props> = ({ status, canResetPassword }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setData(
            e.target.name as "email" | "password" | "remember",
            e.target.type === "checkbox"
                ? e.target.checked + ""
                : e.target.value
        );
    };

    const submit = (e: SyntheticEvent) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <Guest>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <div>
                    <Label forInput="email" value="メールアドレス" />

                    <Input
                        type="text"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
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
                        autoComplete="current-password"
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            value={data.remember}
                            handleChange={onHandleChange}
                        />

                        <span className="ml-2 text-sm text-gray-600">
                            Remember me
                        </span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4 mb-5">
                    {canResetPassword && (
                        <Link
                            href={route("password.request")}
                            className="underline text-sm text-gray-600 hover:text-gray-900"
                        >
                            パスワードを忘れた場合はこちら
                        </Link>
                    )}

                    <Button className="ml-4" processing={processing}>
                        ログイン
                    </Button>
                </div>
                <div className="flex items-center justify-end pt-5">
                    <Link href={route("register")}>
                        <Button type="button" processing={processing}>
                            メールアドレスで登録
                        </Button>
                    </Link>
                </div>
            </form>
        </Guest>
    );
};

export default Login;
