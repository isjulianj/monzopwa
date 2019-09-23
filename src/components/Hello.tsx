import * as React from "react";
import '../styles/styls.scss'

export interface HelloProps { compiler: string; framework: string; }

export const Hello = (props: HelloProps) => {
    return <h1>Hello from {props.compiler} and {props.framework}!</h1>;
};