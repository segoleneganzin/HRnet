import { createAsyncThunk } from '@reduxjs/toolkit';

/**
 * Creates an async thunk action creator using `createAsyncThunk` from Redux Toolkit.
 * @param {string} type - The type of the async thunk action.
 * @param {function} apiFunction - The API function to be called asynchronously.
 * @returns {function} An async thunk action creator.
 */
export const createThunkAction = (type, apiFunction) => {
  return createAsyncThunk(type, async (params) => {
    const response = await apiFunction(params);
    return response;
  });
};

/**
 * Handles async action states (pending, fulfilled, rejected) and updates the state accordingly.
 * Uses in extra reducers slicer
 * @param {object} builder - The Redux Toolkit `builder` object to add case reducers.
 * @param {object} thunk - The async thunk action object containing `pending`, `fulfilled`, and `rejected` actions.
 * @param {string} slicer - The key in the state object where the data slice will be stored.
 */
export const handleAsyncActions = (builder, thunk, slicer) => {
  builder
    .addCase(thunk.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(thunk.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state[slicer] = action.payload.body;
      state.error = null;
    })
    .addCase(thunk.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
};
