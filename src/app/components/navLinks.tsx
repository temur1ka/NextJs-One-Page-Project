import Link from "next/link";
import React from "react";

export const NavLinks = ({ href, title }) => {
  return (
    
      <Link
        href={href}
        className=" py-3 pl-4 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
      >
        {title}
      </Link>
  );
};

export default NavLinks;
