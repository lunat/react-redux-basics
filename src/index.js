import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, combineReducers } from "redux";
import counterReducer from "./store/reducers/counter";
import resultReducer from "./store/reducers/result";
import { Provider } from "react-redux";

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer
});

const store = createStore(rootReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
