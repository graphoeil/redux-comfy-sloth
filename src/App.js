// Imports
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals } from "./store/features/cartSlice";
import { fetchProducts } from "./store/features/productsSlice";
import { setMyUser } from "./store/features/userSlice";
import { Navbar, Sidebar, Footer } from "./components";
import { About, Cart, Checkout, Error, Home, PrivateRoute, Products, SingleProduct } from "./pages";

// Component
const App = () => {

	// Store
	const { cart } = useSelector((store) => { return store.cart; });

	// Dispatch
	const dispatch = useDispatch();

	// Fetch products
	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	// Save cart to localStorage and calculate 
	// cart total everytime cart changes
	useEffect(() => {
		localStorage.setItem('comflySlothRedux', JSON.stringify(cart));
		dispatch(calculateTotals());
	}, [dispatch, cart]);

	// User connected ?
	const { user, isAuthenticated } = useAuth0();
	useEffect(() => {
		dispatch(setMyUser(user));
	}, [isAuthenticated, dispatch, user]);

	// Return
	return(
		<Router>
			
			{/* Navbar */}
			<Navbar/>
			{/* Navbar */}

			{/* Sidebar */}
			<Sidebar/>
			{/* Sidebar */}

			{/* Routes */}
			<Routes>

				{/* Home */}
				<Route path="/" element={ <Home/> }/>
				{/* Home */}

				{/* About */}
				<Route path="/about" element={ <About/> }/>
				{/* About */}

				{/* Cart */}
				<Route path="/cart" element={ <Cart/> }/>
				{/* Cart */}

				{/* Products */}
				<Route path="/products" element={ <Products/> }/>
				{/* Products */}

				{/* Single product */}
				<Route path="/products/:id" element={ <SingleProduct/> }/>
				{/* Single product */}

				{/* Checkout */}
				<Route path="/checkout" element={ <PrivateRoute>
					<Checkout/>
				</PrivateRoute> }/>
				{/* Checkout */}

				{/* Error 404 */}
				<Route path="*" element={ <Error/> }/>
				{/* Error 404 */}

			</Routes>
			{/* Routes */}

			{/* Footer */}
			<Footer/>
			{/* Footer */}

		</Router>
	);

};

// Export
export default App;