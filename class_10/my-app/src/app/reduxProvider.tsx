"use client";
import store from "@/store/store";
import { Provider } from "react-redux";

export default function ReduxProvider({ children }: any) {
  return <Provider store={store}>{children}</Provider>;
}
