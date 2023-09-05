// Imports
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals } from "../store/features/cartSlice";
import { CartContent, PageHero } from '../components';

// Component
const CartPage = () => {

	// Store
	const { cart } = useSelector((store) => { return store.cart; });

	// Dispatch
	const dispatch = useDispatch();

	// Save cart to localStorage and calculate 
	// cart total everytime cart changes
	useEffect(() => {
		localStorage.setItem('comflySlothRedux', JSON.stringify(cart));
		dispatch(calculateTotals());
	}, [dispatch, cart]);

	// Returns
	if (cart.length < 1){
		return(
			<Wrapper className="page-100">
				<div className="empty">
					<h2>Your cart is empty...</h2>
					<Link to="/products" className="btn">
						Fill it !
					</Link>
				</div>
			</Wrapper>
		)
	}
	return(
		<main>
			<PageHero title="Cart"/>
			<Wrapper className="page">
				<CartContent/>
			</Wrapper>
		</main>
	);

};

// Export
const Wrapper = styled.main`
	.empty {
		text-align: center;
		h2 {
			margin-bottom: 1rem;
			text-transform: none;
		}
	}
`;

// Export
export default CartPage;