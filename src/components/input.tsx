import React from "react";
import { useFormContext } from "react-hook-form";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  divclsName?: string;
  name: string;
}

export const Input: React.FC<InputProps> = React.memo(
  ({ type = "text", name, className = "", divclsName, ...rest }) => {
    const {
      register,
      formState: { errors },
    } = useFormContext();
    return (
      <div className={divclsName}>
        <input
          className={`w-full focus:outline-none rounded py-2 px-4 text-lg focus:ring-1 border my-2
        ${
          errors[name]?.message
            ? "ring-red-400 error-input"
            : "ring-purple-300 focus:border-purple-300"
        }
        ${className}`}
          type={type}
          {...register(name)}
          {...rest}
        />
        {errors[name]?.message && (
          <p className="text-xs text-red-500 mb-2 ml-1 mt-1">
            {errors[name]?.message}
          </p>
        )}
      </div>
    );
  },
);
