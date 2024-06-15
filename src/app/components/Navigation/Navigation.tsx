import React from "react";
import NavLink from "./NavLink";

type Props = {};

const Navigation = (props: Props) => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink href="/about">About</NavLink>
        </li>
        <li>
          {" "}
          <NavLink href="/portfolio">Portfolio</NavLink>
        </li>
        <li>
          <NavLink href="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
