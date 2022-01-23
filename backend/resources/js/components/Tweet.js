import React from "react";
import { format } from "date-fns";
import { FaRetweet, FaRegComment } from "react-icons/fa";
import { FcLikePlaceholder } from "react-icons/fc";

export default function Tweet({ tweet }) {
    return (
        <div className="p-2">
            <p>
                <span className="text-lg font-bold mr-4">{tweet.userName}</span>
                <span className="text-sm text-slate-600">
                    {format(new Date(tweet.created_at), "MMM d, yyyy")}
                </span>
            </p>
            <p>{tweet.content}</p>
            <div className="flex">
                <div className="flex items-center mr-4">
                    <div className="mr-2">{<FaRegComment />}</div>
                    <div>{tweet.replay}</div>
                </div>
                <div className="flex items-center mr-4">
                    <div className="mr-2">{<FaRetweet />}</div>
                    <div>{tweet.retweet}</div>
                </div>
                <div className="flex items-center">
                    <div className="mr-2">{<FcLikePlaceholder />}</div>
                    <div>{tweet.likes}</div>
                </div>
            </div>
        </div>
    );
}
