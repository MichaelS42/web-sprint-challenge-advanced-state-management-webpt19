import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//add ons
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
//components
import App from "./components/App";
import reducer from "./reducers";

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
