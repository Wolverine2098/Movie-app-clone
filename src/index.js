import { createStore, applyMiddleware } from "redux";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import rootReducer from "./reducers";

//currying function logger
//logger(obj)(next)(action)
const logger = function ({ dispatch, getState }) {
  return function (next) {
    return function (action) {
      console.log("ACTION_TYPE", action);
      next(action);
    };
  };
};

const store = createStore(rootReducer, applyMiddleware(logger));
console.log("before state", store.getState());
const root = ReactDOM.createRoot(document.getElementById("root"));

store.dispatch({
  type: "ADD_MOVIES",
  movies: [{ name: "Superman" }],
});
console.log("after state", store.getState());
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
