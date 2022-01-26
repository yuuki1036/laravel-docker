import React, { ReactNode, VFC } from "react";

type Props = {
    children: ReactNode;
    processing: boolean;
    type?: "submit" | "button" | "reset" | undefined;
    className?: string;
};

const Button: VFC<Props> = ({
    type = "submit",
    className = "",
    processing,
    children,
}) => {
    return (
        <button
            type={type}
            className={
                `inline-flex items-center px-4 py-2 bg-blue-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest active:bg-blue-500 transition ease-in-out duration-150 ${
                    processing && "opacity-25"
                } ` + className
            }
            disabled={processing}
        >
            {children}
        </button>
    );
};

export default Button;
