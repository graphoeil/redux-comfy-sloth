// Imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProductsThunkFn, fetchSingleProductThunkFn } from "./productsThunk";

// Initial state
const initialState = {
	// Sidebar
	isSidebarOpen:false,
	// Products
	productsLoading:false,
	productsError:false,
	products:[],
	filteredProducts:[],
	featuredProducts:[],
	// Single products
	singleProductLoading:false,
	singleProductError:false,
	singleProduct:{},
	// Filters
	gridView:true,
	sort:'price-lowest',
	filters:{
		text:'',
		company:'all',
		category:'all',
		color:'all',
		minPrice:0,
		maxPrice:0,
		price:0,
		shipping:false
	}
};

// Async methods
export const fetchProducts = createAsyncThunk('products/fetchProducts', fetchProductsThunkFn);
export const fetchSingleProduct = createAsyncThunk('products/fetchSingleProduct', fetchSingleProductThunkFn);

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
		// Fetch single product
		builder.addCase(fetchSingleProduct.pending, (state) => {
			// In case there are old errors we reset singleProductError
			return { ...state, singleProductLoading:true, singleProductError:false }
		}).addCase(fetchSingleProduct.fulfilled, (state, { payload }) => {
			return { ...state, singleProductLoading:false, singleProduct:payload };
		}).addCase(fetchSingleProduct.rejected, (state) => {
			return { ...state, singleProductLoading:false, singleProductError:true };
		});
	}
});

// Actions export
export const { openSidebar, closeSidebar } = productsSlice.actions;

// Reducer export
export default productsSlice.reducer;