import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import BookDemoButton from "./BookDemoButton";




function Header() {
  return (
    <header className="flex flex-col items-center px-16 pt-3 pb-10 text-xl font-semibold leading-none bg-white max-md:px-5">
      <div className="flex flex-wrap gap-5 justify-between w-full max-w-[1619px] max-md:max-w-full">
        <Logo />
        <div className="flex flex-wrap gap-10 max-md:max-w-full">
          <Navigation />
          <BookDemoButton />
        </div>
      </div>
    </header>
  );
}

export default Header;
