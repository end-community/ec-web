import React from "react";
import NLink, { LinkProps as NLinkProps } from "next/link";
import { clearList } from "~/lib";

interface LinkProps extends NLinkProps {
  className?: string;
  right?: boolean;
  left?: boolean;
}

const Link: React.FC<LinkProps> = ({
  children,
  className,
  right,
  left,
  ...rest
}) => (
  <NLink {...rest}>
    <div
      className={`${clearList(left && "mr-auto", right && "ml-auto").join(
        " ",
      )} cursor-pointer`}
    >
      <a
        className={`text-sm underline text-gray-500 hover:text-black ${className}`}
      >
        {children}
      </a>
    </div>
  </NLink>
);

export default React.memo(Link) as React.FC<LinkProps>;
