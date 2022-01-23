import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import Button from "@/Components/Button";
import ValidationErrors from "@/Components/ValidationErrors";
import Label from "@/Components/Label";
import Input from "@/Components/Input";
import GlobalNav from "@/Layouts/GlobalNav";

export default function Create(props) {
    const auth = props.auth;
    const { data, setData, post, processing, errors, reset } = useForm({
        userId: auth.user.id,
        userName: auth.user.name,
        content: "",
        type: "tweet",
        replay: 0,
        likes: 0,
        retweet: 0,
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("tweet.store"));
    };

    return (
        <GlobalNav auth={props.auth} errors={props.errors}>
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
                                        value="今なにしてる？"
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
}
