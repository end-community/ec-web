import React, { useMemo } from "react";
import { Spinner } from "./spinner";

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  color?: "blue" | "purple" | "green" | "red" | "yellow" | "white" | "black";
  loading?: boolean;
  padding?: "sm" | "md" | "lg";
}

export const Button: React.FC<ButtonProps> = React.memo(
  ({
    color = "blue",
    loading,
    className = "",
    children,
    disabled,
    padding = "md",
    ...rest
  }) => {
    const paddingStyle = {
      sm: "py-1 px-2",
      md: "py-2 px-4",
      lg: "py-3 px-6",
    };
    const buttonColor = useMemo(() => {
      if (disabled) return "bg-gray-200 text-gray-400 cursor-not-allowed";
      switch (color) {
        case "white":
          return "border bg-white hover:bg-gray-100 text-black";
        case "black":
          return "border bg-gray-800 hover:bg-black text-white ring-opacity-75 ring-black";
        default:
          return `bg-${color}-500 hover:bg-${color}-600 ring-opacity-75 ring-${color}-500 text-white`;
      }
    }, [disabled, color, loading]);
    return (
      <button
        className={`${paddingStyle[padding]} focus:outline-none transition-all ease-in-out duration-150 rounded-md focus:ring ${buttonColor} ${className}`}
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
