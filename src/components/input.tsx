import React from "react";
import { useFormContext } from "react-hook-form";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: string;
}

export const Input: React.FC<InputProps> = ({
  type = "text",
  name,
  placeholder,
  autoComplete,
  className = "",
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      <input
        autoComplete={autoComplete}
        className={`w-full focus:outline-none rounded py-2 px-4 text-lg focus:ring-1 border my-2
        ${
          errors[name]?.message
            ? "ring-red-400 error-input"
            : "ring-purple-300 focus:border-purple-300"
        }
        ${className}`}
        placeholder={placeholder}
        type={type}
        {...register(name)}
      />
      {errors[name]?.message && (
        <p className="text-xs text-red-500 mb-2 ml-1 mt-1">
          {errors[name]?.message}
        </p>
      )}
    </div>
  );
};
