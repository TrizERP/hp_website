import React from "react";
import NavItem from "./NavItem";
import Link from "next/link";
import "./header.css";
import { useRef } from "react";


function Navigation() {
  const navItems = ["Home", "Product", "Contact", "Help"];
  const buttonRefs = useRef({});

  return (
    <nav className="flex gap-10 my-auto whitespace-nowrap text-zinc-800 max-md:max-w-full">
    </nav>
  );
}

export default Navigation;
