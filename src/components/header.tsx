import React from "react";
import { Logo } from "~/components";

export const Header: React.FC = React.memo(() => (
  <div className="bg-gradient-to-r from-purple-600 to-blue-400 p-2 shadow-sm">
    <Logo />
  </div>
));
