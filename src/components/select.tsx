import React from "react";
import { useFormContext } from "react-hook-form";

interface SelectProps
  extends React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  name: string;
  options: { value: any; label?: any }[];
}

export const Select: React.FC<SelectProps> = React.memo(
  ({ name, className, options }) => {
    const {
      register,
      formState: { errors },
    } = useFormContext();
    return (
      <div className="relative my-2">
        <select
          {...register(name)}
          className={`w-full px-3 pb-2 pt-3 border rounded focus:outline-none appearance-none
        ${errors[name]?.message ? "error-input" : ""}
        ${className}`}
        >
          {options.map((option) => (
            <option
              placeholder="year"
              key={`select-${name}__${option.value}`}
              value={option.value}
            >
              {option.label || option.value}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
              fillRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    );
  },
);
