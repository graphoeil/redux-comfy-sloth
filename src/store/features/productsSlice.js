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
		// Open / close sidebar
		openSidebar:(state) => {
			state.isSidebarOpen = true;
		},
		closeSidebar:(state) => {
			state.isSidebarOpen = false;
		}
	},
	extraReducers:(builder) => {
		
	}
});

// Actions export
export const { openSidebar, closeSidebar } = productsSlice.actions;

// Reducer export
export default productsSlice.reducer;