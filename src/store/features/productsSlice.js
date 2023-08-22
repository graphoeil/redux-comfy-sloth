// Imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { products_url as url } from "../../utils/constants";

// Initial state
const initialState = {
	// Sidebar
	isSidebarOpen:false,
	// Products
	productsLoading:false,
	productsError:false,
	products:[],
	filteredProducts:[],
	featuredProducts:[]
	// Single products
};

// Async methods
export const fetchProducts = createAsyncThunk('products/fetchProducts', async(_, thunkAPI) => {
	try {
		const response = await axios.get(url);
		return response.data;
	} catch (error){
		console.log(error);
	}
});

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
		},
		// 
	},
	extraReducers:(builder) => {
		// Fetch products
		builder.addCase(fetchProducts.pending, (state) => {
			state.productsLoading = true;
		}).addCase(fetchProducts.fulfilled, (state, { payload }) => {
			const featuredProducts = payload.filter((product) => {
				return product.featured;
			});
			return { ...state, productsLoading:false, products:payload, filteredProducts:payload, featuredProducts };
		}).addCase(fetchProducts.rejected, (state) => {
			return { ...state, productsLoading:false, productsError:true }
		});
	}
});

// Actions export
export const { openSidebar, closeSidebar } = productsSlice.actions;

// Reducer export
export default productsSlice.reducer;