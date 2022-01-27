import React, { ChangeEvent, SyntheticEvent, VFC } from "react";
import Button from "@/Components/Button";
import Guest from "@/Layouts/Guest";
import Input from "@/Components/Input";
import ValidationErrors from "@/Components/ValidationErrors";
import { Head, useForm } from "@inertiajs/inertia-react";
import route from "ziggy-js";

type Props = {
    status: string;
};

type FormInput = {
    email: string;
};

const ForgotPassword: VFC<Props> = ({ status }) => {
    const { data, setData, post, processing, errors } = useForm<FormInput>({
        email: "",
    });

    const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setData("email", e.target.value);
    };

    const submit = (e: SyntheticEvent) => {
        e.preventDefault();

        post(route("password.email"));
    };

    return (
        <Guest>
            <Head title="パスワード再発行" />

            <div className="mb-4 text-sm text-gray-500 leading-normal">
                パスワードをお忘れですか？
                <br />
                パスワードをリセットするリンクを記載したメールを送信します。宛先のメールアドレスを入力してください。
            </div>

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <Input
                    type="text"
                    name="email"
                    value={data.email}
                    className="mt-1 block w-full"
                    isFocused={true}
                    handleChange={onHandleChange}
                />

                <div className="flex items-center justify-end mt-4">
                    <Button className="ml-4" processing={processing}>
                        メール送信
                    </Button>
                </div>
            </form>
        </Guest>
    );
};

export default ForgotPassword;
