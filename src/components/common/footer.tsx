import React from "react";
import Image from "next/image";

const Footer: React.FC = () => (
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

export default React.memo(Footer) as React.FC;
