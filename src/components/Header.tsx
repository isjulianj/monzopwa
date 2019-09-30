import React from "react";

export const Header: React.FC = (props: string) => {
  return (
    <header className="Header container">
      <nav className="navbar navbar-light bg-light Header__navigation ">
        <a className="navbar-brand" href="#">
          <img
            src="//placehold.it/30x30"
            width="30"
            height="30"
            class="d-inline-block align-top"
            alt=""
          />
          &nbsp; Monzo PWA
        </a>
      </nav>
    </header>
  );
};
