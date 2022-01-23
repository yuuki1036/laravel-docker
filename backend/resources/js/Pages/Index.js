import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";
import Button from "@/Components/Button";
import GlobalNav from "@/Layouts/GlobalNav";

export default function Index(props) {
    console.log(props);
    return (
        <GlobalNav
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Twitter Clone
                </h2>
            }
        >
            <Head title="Twitter Clone" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div>
                        <Link href={route("tweet.create")}>
                            <Button type="button">新規作成</Button>
                        </Link>
                    </div>
                    <div className="p-6 bg-white border-b border-gray-200">
                        <table>
                            {props.tweets.map((tweet) => {
                                return (
                                    <tr key={tweet.id}>
                                        <td className="border px-4 py-2">
                                            {tweet.userName}
                                        </td>
                                        <td className="border px-4 py-2">
                                            {tweet.content}
                                        </td>
                                    </tr>
                                );
                            })}
                        </table>
                    </div>
                </div>
            </div>
        </GlobalNav>
    );
}
