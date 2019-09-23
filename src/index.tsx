import * as React from "react";
import * as ReactDOM from "react-dom";

//TODO fix this in the webpack loader
import { Hello } from "./components/Hello";

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);