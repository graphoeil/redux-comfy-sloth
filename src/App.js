// Imports
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import { About, Cart, Checkout, Error, Home, PrivateRoute, Products, SingleProduct } from "./pages";

// Component
const App = () => {

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
				<Route path="/checkout" element={ <PrivateRoute><Checkout/></PrivateRoute> }/>
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