import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { getData, postData, putData, removeData } from "../../utils/api";
// import { openToast } from "../Toast/toastSlice";

const POST_URL = "admin/Post";

const fetchPosts = createAsyncThunk(
  "admin/fetchPost",
  async (url, { rejectWithValue }) => {
    try {
      const response = await getData(url);
      return response;
    } catch (error) {
      const errorMessage = error;
      console.log(errorMessage);
      return rejectWithValue(errorMessage?.response?.data);
    }
  }
);

const addNewPost = createAsyncThunk(
  "addNewPost",
  async (PostData, { rejectWithValue, dispatch }) => {
    try {
      const response = await postData("posts/add", PostData);

      if (
        response?.status === 202 ||
        response?.status === 200 ||
        response?.status === 201 ||
        response?.status_code === 202 ||
        response?.status_code === 200 ||
        response?.status_code === 201
      ) {
        toast.success("Post created successfully!");
        // dispatch(
        //   openToast({
        //     type: "success",
        //     message: "Post created successfully",
        //   })
        // );
      }
      console.log("Post create response", response);
      dispatch(fetchPosts());
    } catch (error) {
      const errorMessage = error;
      console.log(errorMessage);
      return rejectWithValue(errorMessage?.response?.data);
    }
  }
);

// Async thunk action creator for fetching a single Post
const fetchPost = createAsyncThunk(
  "getPost",
  async (id, { rejectWithValue }) => {
    try {
      const response = await getData(`${POST_URL}/${id}`);
      return response;
    } catch (error) {
      const errorMessage = error;
      console.log(errorMessage);
      return rejectWithValue(errorMessage?.response?.data);
    }
  }
);

const updatePost = createAsyncThunk(
  "updatePost",
  async ({ id, formData }, { rejectWithValue, dispatch }) => {
    // console.log("Edit Id Enter here", id);
    // console.log("Edit formdata Enter here ", formData);
    try {
      const response = await putData(`${POST_URL}/${id}`, formData);
      if (
        response?.status === 202 ||
        response?.status === 200 ||
        response?.status === 201 ||
        response?.status_code === 202 ||
        response?.status_code === 200 ||
        response?.status_code === 201
      ) {
        dispatch(fetchPosts());
        toast.success("Post updated successfully!");
        // dispatch(
        //   openToast({
        //     type: "success",
        //     message: "Post account updated successfully",
        //   })
        // );
      }
      // console.log("editing Response", response);
      return response;
    } catch (error) {
      const errorMessage = error;
      console.log(errorMessage);
      return rejectWithValue(errorMessage?.response?.data);
    }
  }
);

const deletePost = createAsyncThunk(
  "deletePost",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      // console.log(id);
      const response = await removeData(`${POST_URL}/${id}`);
      if (
        response?.status === 202 ||
        response?.status === 200 ||
        response?.status === 201 ||
        response?.status_code === 202 ||
        response?.status_code === 200 ||
        response?.status_code === 201
      ) {
        dispatch(fetchPosts());
        toast.success("Post has been deleted successfully");
        // dispatch(
        //   openToast({
        //     type: "success",
        //     message: "Post has been deleted successfully",
        //   })
        // );
      }
      return response;
    } catch (error) {
      const errorMessage = error;
      console.log(errorMessage);
      return rejectWithValue(errorMessage?.response?.data);
    }
  }
);

export { fetchPosts, addNewPost, fetchPost, updatePost, deletePost };
