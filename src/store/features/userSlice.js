// Imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useAuth0 } from "@auth0/auth0-react";

// Initial state
const initialState = {

};

// Async methods

// Slice
const userSlice = createSlice({
	name:'user',
	initialState,
	reducers:{

	},
	extraReducers:{

	}
});

// Actions export
export const {  } = userSlice.actions;

// Reducer export
export default userSlice.reducer;