import React, { ReactNode, VFC } from "react";

type Props = {
    forInput: string;
    value: string;
    className?: string;
    children?: ReactNode;
};

const Label: VFC<Props> = ({ forInput, value, className, children }) => {
    return (
        <label
            htmlFor={forInput}
            className={`block font-medium text-sm text-gray-700 ` + className}
        >
            {value ? value : children}
        </label>
    );
};

export default Label;
