import { createSlice } from "@reduxjs/toolkit";
import {
  fetchPosts,
  addNewPost,
  fetchPost,
  updatePost,
  deletePost,
} from "./postsThunk";
// / Import the new thunk action creators

const initialState = {
  posts: [],
  post: [],
  loading: false,
  error: null,
};

// Create the posts slice
const postsSlice = createSlice({
  name: "adminposts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchPosts
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        // state.posts = action.payload;
        state.posts = Array.isArray(action.payload.response)
          ? action.payload.response
          : [];
      })

      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Failed to fetch posts";
      })

      // addNewPost
      .addCase(addNewPost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        state.loading = false;
        // state.posts = [...state.posts, action.payload];
        state.posts = [...state.posts, { ...action.payload }];
      })
      .addCase(addNewPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Failed to add new post";
      })

      // fetchPost
      .addCase(fetchPost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.loading = false;
        state.post = action.payload;
      })
      .addCase(fetchPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Failed to fetch post";
      })

      // updatecoupon
      .addCase(updatePost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.loading = false;
        state.post = action.payload;
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Failed to update post";
      })

      // deletePost
      .addCase(deletePost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.loading = false;
        if (Array.isArray(state.Posts)) {
          state.posts = state.posts.filter(
            (item) => item.id !== action.payload.id
          );
        }
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Failed to delete post";
      });
  },
});

// Export the reducer
export default postsSlice.reducer;
