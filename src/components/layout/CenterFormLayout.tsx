import React from "react";
import { Line } from "../line";

interface CenterFormLayoutProps {
  description: string;
}

export const CenterFormLayout: React.FC<CenterFormLayoutProps> = React.memo(
  ({ children, description }) => (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <div className="w-full max-w-md container bg-white sm:rounded-lg sm:shadow-md overflow-hidden">
        <p className="bg-gradient-to-r from-purple-600 to-blue-400 p-2 shadow-sm font-semibold text-white text-lg text-center">
          <span className="font-bold text-2xl mr-1">EnCom</span> {description}
        </p>
        <Line />
        <div className="p-4 flex flex-col space-y-4">{children}</div>
      </div>
    </div>
  ),
);
{
  /* <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-400">
          EnCom
        </h1> */
}
