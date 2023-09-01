// Imports
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
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

	}, [dispatch, cart]);

	// Returns
	return(
		<Wrapper>
			
		</Wrapper>
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