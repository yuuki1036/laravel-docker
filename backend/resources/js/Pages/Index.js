import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";
import Button from "@/Components/Button";
import GlobalNav from "@/Layouts/GlobalNav";
import TweetList from "@/components/TweetList";

export default function Index(props) {
    const tweets = props.tweets;
    return (
        <GlobalNav auth={props.auth} errors={props.errors}>
            <Head title="Twitter Clone" />
            <div className="max-w-4xl mx-auto py-6">
                <div className="p-7 pt-4 bg-white border-b border-gray-200">
                    <div className="flex justify-between py-2">
                        <p className="text-2xl">Twitter Clone</p>
                        <div>
                            <Link href={route("tweet.create")}>
                                <Button type="button">つぶやく</Button>
                            </Link>
                        </div>
                    </div>
                    <div></div>
                    <TweetList tweets={tweets} />
                </div>
            </div>
        </GlobalNav>
    );
}
