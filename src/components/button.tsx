import React, { useCallback, useMemo } from "react";
import { Spinner } from "./spinner";

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  color?: "blue" | "purple" | "green" | "white";
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = React.memo(
  ({
    className = "",
    children,
    color = "blue",
    disabled,
    loading,
    ...rest
  }) => {
    const buttonColor = useMemo(() => {
      if (disabled) return "bg-gray-200 text-gray-400 cursor-not-allowed";
      switch (color) {
        case "blue":
          return "bg-blue-500 hover:bg-blue-600 ring-opacity-75 ring-blue-500 text-white";
        case "purple":
          return "bg-purple-500 hover:bg-purple-600 ring-opacity-75 ring-purple-500 text-white";
        case "green":
          return "bg-green-500 hover:bg-green-600 ring-opacity-75 ring-green-500 text-white";
        case "white":
          return "border bg-gray-100 hover:bg-gray-200 text-black";
      }
    }, [disabled, color, loading]);
    return (
      <button
        className={`focus:outline-none transition ease-in-out duration-150 rounded-md py-2 px-4 focus:ring ${buttonColor} ${className}`}
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
