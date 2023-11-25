"use client";
import React from "react"
import {store} from "./index"
import { Provider } from "react-redux";

export const ReduxProvider = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);