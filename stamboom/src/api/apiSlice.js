//
// NOT USED
//
// this is used with redux toolkit
import { fetchBaseQuery } from "@reduxjs/toolkit";
// import { login, logout } from '../redux/userSlice';

const baseQuery = fetchBaseQuery({
  baseURL: "http://localhost:9000",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.originalStatus === 403) {
    console.log("sending refresh token");

    // send refresh token to get new access token
    const refreshResult = await baseQuery("/refresh", api, extraOptions);
    console.log(refreshResult);
    if (refreshResult?.data) {
      const user = api.getState().auth.user;
      // 12:26 https://www.youtube.com/watch?v=-JJFQ9bkUbo
    }
  }
};
