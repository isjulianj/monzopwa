import * as React from "react";

export interface IProps {
  compiler: string;
  framework: string;
}

const jumbotronBg = {
  background:
    "url('https://developers.monzo.com/static/media/developers-bg.7a68fb39.jpg')"
};

export const LogMeIn: React.FC<IProps> = props => {
  return (
    <div className="container">
      <div
        className="Header__hero jumbotron jumbotron-fluid d-flex text-white"
        style={jumbotronBg}
      >
        <div className="container">
          <div className="p-1">
            <h1>Log into your account!</h1>
          </div>
          <div className="p-1">
            <button className="btn btn-primary">
              Sign in with your monzo account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
