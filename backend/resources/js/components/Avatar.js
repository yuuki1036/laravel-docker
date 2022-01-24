import React from "react";
import Avatar from "react-avatar";

export default function MyAvatar({ name = "unknown", size = 50 }) {
    return (
        <div>
            <Avatar name={name} size={size} size={"3rem"} round={"3rem"} />
        </div>
    );
}
