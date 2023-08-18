// Imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Initial state
const initialState = {

};

// Async methods

// Slice
const cartSlice = createSlice({
	name:'cart',
	initialState,
	reducers:{

	},
	extraReducers:(builder) => {
		
	}
});

// Actions export
export const {  } = cartSlice.actions;

// Reducer export
export default cartSlice.reducer;