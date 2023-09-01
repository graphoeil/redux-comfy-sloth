// Imports
import { createSlice } from "@reduxjs/toolkit";

// LocalStorage

// Initial state
const initialState = {
	cart:[],
	totalItems:0,
	totalAmount:0,
	shippingFee:534
};

// Slice
const cartSlice = createSlice({
	name:'cart',
	initialState,
	reducers:{
		// Add to cart
		addToCart:(state, { payload:{ id, color, amount, product } }) => {
			// Already in the cart ?
			const tempItem = state.cart.find((item) => {
				return item.id === id + color;
			});
			if (tempItem){
				// Already in the cart, we update amount
				const tempCart = state.cart.map((cartItem) => {
					if (cartItem.id === id + color){
						let newAmount =  cartItem.amount + amount;
						// Check the stock
						if (newAmount > cartItem.max){
							newAmount = cartItem.max;
						}
						// Update amount for this cartItem
						return { ...cartItem, amount:newAmount };
					} else {
						return cartItem;
					}
				});
				// Update cart state
				return { ...state, cart:tempCart };
			} else {
				// New product
				const newItem = { id:`${id}${color}`, name:product.name, 
					color, amount, image:product.images[0].url, 
					price:product.price, max:product.stock };
				// Add to state
				state.cart.push(newItem);
				// Or return { ...state, cart:[...state.cart, newItem] };
			}
		},
		// Amount change
		// Remove from cart
		// Clear cart
		// Calculate totals
	}
});

// Actions export
export const { addToCart } = cartSlice.actions;

// Reducer export
export default cartSlice.reducer;