import React, { Fragment } from 'react';

//components
import { Header } from './Header';
import { LogMeIn } from './LogMeIn';

// Scss
import '../styles/styls.scss';

export default function App(props: any) {
  return (
    <Fragment>
      <Header></Header>
      <LogMeIn></LogMeIn>
    </Fragment>
  );
}
