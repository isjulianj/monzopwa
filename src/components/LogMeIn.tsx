import * as React from 'react';

export interface IProps {
  compiler: string;
  framework: string;
}

export const LogMeIn: React.FC<IProps> = props => {
  return (
    <div className="container">
      <h1>Log into your account!</h1>;
    </div>
  );
};
