import React from "react";
import Tweet from "./Tweet";

export default function TweetList({ tweets }) {
    return (
        <div className="max-w-6xl divide-y-2 divide-slate-200 border-2 boder-slate-200">
            {tweets.map((tweet) => (
                <div key={tweet.id}>
                    <Tweet tweet={tweet} />
                </div>
            ))}
        </div>
    );
}
