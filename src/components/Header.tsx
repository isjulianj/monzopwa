import React from 'react';
export const Header: React.FC = (props: string) => {
  return (
    <nav className="navbar navbar-light bg-light">
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
  );
};
