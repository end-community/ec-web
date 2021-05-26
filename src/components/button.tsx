import React, { useMemo } from "react";
import { Spinner } from "./spinner";

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  color?: "blue" | "purple" | "green" | "red" | "yellow" | "white";
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = React.memo(
  ({
    color = "blue",
    loading,
    className = "",
    children,
    disabled,
    ...rest
  }) => {
    const buttonColor = useMemo(() => {
      if (disabled) return "bg-gray-200 text-gray-400 cursor-not-allowed";
      switch (color) {
        case "white":
          return "border bg-gray-100 hover:bg-gray-200 text-black";
        default:
          return `bg-${color}-500 hover:bg-${color}-600 ring-opacity-75 ring-${color}-500 text-white`;
      }
    }, [disabled, color, loading]);
    return (
      <button
        className={` focus:outline-none transition ease-in-out duration-150 rounded-md py-2 px-4 focus:ring ${buttonColor} ${className}`}
        {...rest}
      >
        <p className="relative flex justify-center">
          {loading && <Spinner />}
          {children}
        </p>
      </button>
    );
  },
);
