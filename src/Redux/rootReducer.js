import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import userauthReducer from "./userAuth/userAuthSlice";
import postsReducer from "./posts/postsSlice";
import categoryReducer from "./category/categoriesSlice";
import authorReducer from "./author/authorSlice";

// Combine the slice reducers into a root reducer
const rootReducer = combineReducers({
  auth: authReducer,
  userauth: userauthReducer,
  author: authorReducer,
  posts: postsReducer,
  category: categoryReducer,
});

// No need to define RootState type in JavaScript
export default rootReducer;
