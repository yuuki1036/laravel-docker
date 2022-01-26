import React, { VFC } from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import GlobalNav from "@/Layouts/GlobalNav";
import TweetList from "@/Components/TweetList";
import route from "ziggy-js";
import Button from "@/Components/Button";

type Props = {
    tweets: any;
    auth: any;
};

const Index: VFC<Props> = ({ auth, tweets }) => {
    return (
        <GlobalNav auth={auth}>
            <Head title="Twitter Clone" />
            <div className="max-w-4xl mx-auto py-6">
                <div className="p-7 pt-4 bg-white border-b border-gray-200">
                    <div className="flex justify-between py-2">
                        <p className="text-2xl">HITOKOTO</p>
                        <div>
                            <Link href={route("tweet.create")}>
                                <Button type="button" processing={false}>
                                    つぶやく
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div></div>
                    <TweetList tweets={tweets} />
                </div>
            </div>
        </GlobalNav>
    );
};

export default Index;
