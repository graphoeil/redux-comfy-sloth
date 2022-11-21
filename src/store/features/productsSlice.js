// Imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Initial state
const initialState = {

};

// Async methods

// Slice
const productsSlice = createSlice({
	name:'products',
	initialState,
	reducers:{

	},
	extraReducers:{

	}
});

// Actions export
export const {  } = productsSlice.actions;

// Reducer export
export default productsSlice.reducer;