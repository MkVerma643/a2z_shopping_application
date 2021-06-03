import { createStore, applyMiddleware } from "redux";
import a2z from "./reducers";
import thunk from "redux-thunk";

var store = createStore(a2z);

export default store;
