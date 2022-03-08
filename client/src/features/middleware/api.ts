import axios from "axios";
import { Middleware, MiddlewareAPI } from "redux";
import { baseUrl } from "./config";
import { createAction } from "@reduxjs/toolkit";
import { memberList } from "../memberReducer";

export const apiCallBegan = createAction<any>("apiCall");

const apicall: Middleware = (store) => (next) => async (action) => {
  if (action.type != apiCallBegan.type) return next(action);

  next(action);
  const { url, method, data, onSuccess } = action.payload;

  try {
    const res: any = await axios.request({
      url,
      method,
      data,
    });
    console.log(res.data);
    store.dispatch(memberList({ members: res.data.members }));
  } catch (error: any) {
    console.error(error);
  }
};

export default apicall;
