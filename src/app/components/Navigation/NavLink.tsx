"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type NavLinkProps = {
  href: string;
  children: React.ReactElement | string;
};

const NavLink = ({ href, children }: NavLinkProps) => {
  const path = usePathname();

  return (
    <Link className={path.startsWith(href) ? "active" : ""} href={href}>
      {children}
    </Link>
  );
};

export default NavLink;
