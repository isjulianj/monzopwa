import React, { useState, useEffect } from 'react';

import fetchLogInCreds, { IParams } from '../helpers/fetchLogInCreds';

export interface IProps {
  compiler: string;
  framework: string;
}

const jumbotronBg = {
  background:
    "url('https://developers.monzo.com/static/media/developers-bg.7a68fb39.jpg')"
};

export const LogMeIn: React.FC<IProps> = props => {
  const [email, setEmail] = useState('');
  let params: IParams;
  useEffect(() => {
    params = {
      client_id: email,
      // client_secret: '',
      redirect_uri: 'http://localhost:3000/oathcallback',
      response_type: 'code',
      state: '229e8c0a-5daa-4017-ad2a-f9835a49f128 18'
    };
  }, [email]);

  return (
    <div className="container">
      <div
        className="Header__hero jumbotron jumbotron-fluid d-flex text-white"
        style={jumbotronBg}
      >
        <div className="container">
          <div className="p-1">
            <h2>Log into your account!</h2>
          </div>
          <div className="p-1">
            <form>
              <div className="form-group">
                <label htmlFor="inputEmail">Email: </label>
                <input
                  type="text"
                  aria-label="Email address"
                  placeholder="you@example.com"
                  id="inputEmail"
                  required
                  className="d-block"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <button
                onClick={e => {
                  e.preventDefault();
                  fetchLogInCreds('https://auth.monzo.com/', params);
                }}
              >
                Sign in with your monzo account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
