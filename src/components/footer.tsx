import React from "react";
import Image from "next/image";

export const Footer: React.FC = () => {
  return (
    <div className="text-center py-5 bg-gray-800">
      <a
        href="https://github.com/pankod"
        target="_blank"
        className="block mb-3"
        data-testid="pankod-logo"
      >
        <Image
          data-test="icon"
          src="/icons/pankod-icon.svg"
          alt="pankod"
          width="140"
          height="28"
        />
      </a>
    </div>
  );
};
