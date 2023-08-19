// Imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Initial state
const initialState = {
	isSidebarOpen:false
};

// Async methods

// Slice
const productsSlice = createSlice({
	name:'products',
	initialState,
	reducers:{
		// Show / hide sidebar
		showSidebar:(state) => {
			state.isSidebarOpen = true;
		},
		hideSidebar:(state) => {
			state.isSidebarOpen = false;
		}
	},
	extraReducers:(builder) => {
		
	}
});

// Actions export
export const { showSidebar, hideSidebar } = productsSlice.actions;

// Reducer export
export default productsSlice.reducer;