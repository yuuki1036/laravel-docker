import React, { VFC } from "react";
import Tweet from "./Tweet";
import InfinityScroll from "react-infinite-scroll-component";
import { Tweet as TweetType } from "@/types/tweet";

type Props = {
    tweets: TweetType[];
};

const TweetList: VFC<Props> = ({ tweets }) => {
    return (
        <div className="max-w-4xl divide-y-2 divide-slate-200 border-2 boder-slate-200">
            {tweets.map((tweet: any) => (
                <div key={tweet.id}>
                    <Tweet tweet={tweet} />
                </div>
            ))}
        </div>
    );
};

export default TweetList;
