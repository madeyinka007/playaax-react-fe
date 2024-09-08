import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAuthors,
  addNewAuthor,
  fetchAuthor,
  updateAuthor,
  deleteAuthor,
} from "./authorThunk";
// / Import the new thunk action creators

const initialState = {
  authors: [],
  author: [],
  loading: false,
  error: null,
};

// Create the Author slice
const authorSlice = createSlice({
  name: "authors",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchAuthor
      .addCase(fetchAuthors.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAuthors.fulfilled, (state, action) => {
        state.loading = false;
        state.authors = action.payload;
      })

      .addCase(fetchAuthors.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Failed to fetch authors";
      })

      // addNewAuthor
      .addCase(addNewAuthor.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addNewAuthor.fulfilled, (state, action) => {
        state.loading = false;
        state.authors = [...state.authors, action.payload];
      })
      .addCase(addNewAuthor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Failed to add new author";
      })

      // fetchAuthor
      .addCase(fetchAuthor.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAuthor.fulfilled, (state, action) => {
        state.loading = false;
        state.author = action.payload;
      })
      .addCase(fetchAuthor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Failed to fetch author";
      })

      // updateAuthor
      .addCase(updateAuthor.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateAuthor.fulfilled, (state, action) => {
        state.loading = false;
        state.author = action.payload;
      })
      .addCase(updateAuthor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Failed to update author";
      })

      // deleteAuthor
      .addCase(deleteAuthor.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteAuthor.fulfilled, (state, action) => {
        state.loading = false;
        if (Array.isArray(state.authors)) {
          state.authors = state.authors.filter(
            (item) => item.id !== action.payload.id
          );
        }
      })
      .addCase(deleteAuthor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Failed to delete author";
      });
  },
});

// Export the reducer
export default authorSlice.reducer;
