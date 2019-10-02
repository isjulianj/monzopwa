import React, { Fragment } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

//components
import { Header } from './Header';
import { LogMeIn } from './LogMeIn';

// Scss
import '../styles/styls.scss';

export default function App(props: any) {
  return (
    <Router>
      <Route exact path="/">
        <Header></Header>
        <LogMeIn></LogMeIn>
      </Route>
      <Route path="/oathcallback">
        <div className="hello">Hello world</div>
      </Route>
    </Router>
  );
}
