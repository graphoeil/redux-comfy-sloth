// Imports
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CartContent, PageHero } from '../components';

// Component
const CartPage = () => {
	return <h4>cart page</h4>
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