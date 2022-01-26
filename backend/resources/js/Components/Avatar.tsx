import React, { VFC } from "react";
import Avatar, { ReactAvatarProps } from "react-avatar";

const MyAvatar: VFC<ReactAvatarProps> = ({ name = "unknown", size = 50 }) => {
    return (
        <div>
            <Avatar name={name} size={"3rem"} round={"3rem"} />
        </div>
    );
};

export default MyAvatar;
