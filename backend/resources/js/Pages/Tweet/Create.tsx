import React, { ChangeEvent, SyntheticEvent, VFC } from "react";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import Button from "@/Components/Button";
import ValidationErrors from "@/Components/ValidationErrors";
import Label from "@/Components/Label";
import Input from "@/Components/Input";
import GlobalNav from "@/Layouts/GlobalNav";
import route from "ziggy-js";
import { Auth } from "@/types/auth";
import { SendTweet } from "@/types/tweet";

type Props = {
    auth: Auth;
};

const Create: VFC<Props> = ({ auth }) => {
    console.log(auth);
    const { data, setData, post, processing, errors } = useForm<SendTweet>({
        userId: auth.user.id,
        userName: auth.user.name,
        content: "",
        type: "tweet",
        replay: 0,
        likes: 0,
        retweet: 0,
    });

    const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setData("content", e.target.value);
    };

    const submit = (e: SyntheticEvent) => {
        e.preventDefault();

        post(route("tweet.store"));
    };

    return (
        <GlobalNav auth={auth}>
            <Head title="つぶやく" />
            <div className="py-12">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <ValidationErrors errors={errors} />
                            <form onSubmit={submit}>
                                <div>
                                    <Label
                                        forInput="content"
                                        value="ひとことお願いします。"
                                    />

                                    <Input
                                        type="text"
                                        name="content"
                                        value={data.content}
                                        className="mt-1 block w-full"
                                        isFocused={true}
                                        handleChange={onHandleChange}
                                    />
                                </div>

                                <div className="flex items-center justify-end mt-4">
                                    <Button
                                        className="ml-4"
                                        processing={processing}
                                    >
                                        つぶやく
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </GlobalNav>
    );
};

export default Create;
