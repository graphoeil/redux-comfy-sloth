// Imports
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./store/features/productsSlice";
import { Navbar, Sidebar, Footer } from "./components";
import { About, Cart, Checkout, Error, Home, PrivateRoute, Products, SingleProduct } from "./pages";

// Component
const App = () => {

	// Dispatch
	const dispatch = useDispatch();

	// Fetch products
	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

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
				<Route path="/checkout" element={ <Checkout/> }/>
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