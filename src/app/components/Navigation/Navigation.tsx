import React from "react";
import NavLink from "./NavLink";
import Image from "next/image";
import Logo from "@/app/assets/images/logo.svg";

type NavigationProps = {};

const Navigation = (props: NavigationProps) => {
  return (
    <div className="navbar">
      <NavLink href="/">
        <Image src={Logo} alt="Code-Matter" />
      </NavLink>
      <ul>
        <li>
          <NavLink href="/about">About</NavLink>
        </li>
        <li>
          {" "}
          <NavLink href="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink href="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
