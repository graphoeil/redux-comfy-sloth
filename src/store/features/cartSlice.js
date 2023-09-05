// Imports
import { createSlice } from "@reduxjs/toolkit";

// LocalStorage ?
const getLocalStorage  = () => {
	const cart = localStorage.getItem('comflySlothRedux');
	if (cart){
		return JSON.parse(cart);
	}
	return [];
};

// Initial state
const initialState = {
	cart:getLocalStorage(),
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
		amountChange:(state, { payload:{ id, value } }) => {

		},
		// Remove from cart
		removeItem:(state, { payload:{ id } }) => {

		},
		// Clear cart
		clearCart:(state) => {
			state.cart = [];
		},
		// Calculate totals
		calculateTotals:(state) => {
			
		}
	}
});

// Actions export
export const { addToCart, amountChange, removeItem, 
	clearCart, calculateTotals } = cartSlice.actions;

// Reducer export
export default cartSlice.reducer;