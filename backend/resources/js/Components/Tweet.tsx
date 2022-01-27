import React, { useState, VFC } from "react";
import { format } from "date-fns";
import { FaRetweet, FaRegComment } from "react-icons/fa";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import MyAvatar from "./Avatar";

type Props = {
    tweet: any;
};

const Tweet: VFC<Props> = ({ tweet }) => {
    const [isLiked, setIsLiked] = useState<boolean>(false);
    const handleClick = (e: any) => {
        e.preventDefault();
        if (isLiked) {
            tweet.likes -= 1;
        } else {
            tweet.likes += 1;
        }
        setIsLiked(!isLiked);
    };
    return (
        <div className="flex p-2">
            <div className="mt-2 mr-4">
                <MyAvatar name={tweet.userName} />
            </div>
            <div>
                <p>
                    <span></span>
                    <span className="text-lg font-bold mr-4">
                        {tweet.userName}
                    </span>
                    <span className="text-sm text-slate-600">
                        {format(new Date(tweet.created_at), "MMM d, yyyy")}
                    </span>
                </p>
                <p>{tweet.content}</p>
                <div className="flex">
                    <div className="flex items-center mr-5">
                        <div className="mr-2">{<FaRegComment />}</div>
                        <div>{tweet.replay}</div>
                    </div>
                    <div className="flex items-center mr-5">
                        <div className="mr-2">{<FaRetweet />}</div>
                        <div>{tweet.retweet}</div>
                    </div>
                    <div
                        className="flex items-center cursor-pointer"
                        onClick={(e) => handleClick(e)}
                    >
                        <div className="mr-2">
                            {isLiked ? <FcLike /> : <FcLikePlaceholder />}
                        </div>
                        <div>{tweet.likes}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tweet;
