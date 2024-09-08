/* eslint-disable no-unused-vars */
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { getData, postData, putData, removeData } from "../../utils/api";
// import { openToast } from "../Toast/toastSlice";

const AUTHOR_URL = "admin/author";

const fetchAuthors = createAsyncThunk(
  "admin/fetchAuthor",
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

const addNewAuthor = createAsyncThunk(
  "addNewAuthor",
  async (AuthorData, { rejectWithValue, dispatch }) => {
    try {
      const response = await postData("posts/author/add", AuthorData);

      if (response?.status === 201) {
        toast.success("Author created successfully!");

        dispatch(fetchAuthors("posts/author/pull?del_flag=0"));
      }
      console.log("Author create response", response);
    } catch (error) {
      const errorMessage = error;
      console.log(errorMessage);
      return rejectWithValue(errorMessage?.response?.data);
    }
  }
);

// Async thunk action creator for fetching a single Author
const fetchAuthor = createAsyncThunk(
  "getAuthor",
  async (id, { rejectWithValue }) => {
    try {
      const response = await getData(`posts/Author-by-identity?identity=${id}`);
      return response;
    } catch (error) {
      const errorMessage = error;
      console.log(errorMessage);
      return rejectWithValue(errorMessage?.response?.data);
    }
  }
);

const updateAuthor = createAsyncThunk(
  "updateAuthor",
  async ({ id, formData }, { rejectWithValue, dispatch }) => {
    // console.log("Edit Id Enter here", id);
    // console.log("Edit formdata Enter here ", formData);
    try {
      const response = await putData(`${AUTHOR_URL}/${id}`, formData);
      if (
        response?.status === 202 ||
        response?.status === 200 ||
        response?.status === 201 ||
        response?.status_code === 202 ||
        response?.status_code === 200 ||
        response?.status_code === 201
      ) {
        dispatch(fetchAuthors());
        toast.success("Author updated successfully!");
        // dispatch(
        //   openToast({
        //     type: "success",
        //     message: "Author account updated successfully",
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

const deleteAuthor = createAsyncThunk(
  "deleteAuthor",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      // console.log(id);
      const response = await removeData(`${AUTHOR_URL}/${id}`);
      if (
        response?.status === 202 ||
        response?.status === 200 ||
        response?.status === 201 ||
        response?.status_code === 202 ||
        response?.status_code === 200 ||
        response?.status_code === 201
      ) {
        dispatch(fetchAuthors());
        toast.success("Author deleted successfully!");
        // dispatch(
        //   openToast({
        //     type: "success",
        //     message: "Author has been deleted successfully",
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

export { fetchAuthors, addNewAuthor, fetchAuthor, updateAuthor, deleteAuthor };
