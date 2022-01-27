export type Tweet = {
    id: number;
    userId: number;
    userName: string;
    content: string;
    type: "tweet" | "retweet";
    likes: number;
    replay: number;
    retweet: number;
    created_at: string;
    updated_at: string;
};

export type SendTweet = {
    userId: number;
    userName: string;
    content: string;
    type: "tweet" | "retweet";
    likes: number;
    replay: number;
    retweet: number;
};
