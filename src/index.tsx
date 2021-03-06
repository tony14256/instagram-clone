import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Add this import:
import { AppContainer } from "react-hot-loader";

// Wrap the rendering in a function:
const render = (Component: () => JSX.Element) => {
  ReactDOM.render(
    // Wrap App inside AppContainer
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById("root")
  );
};

// Render once
render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./App", () => {
    render(App);
  });
}
