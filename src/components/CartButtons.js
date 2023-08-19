// Imports
import React from 'react';
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from "react-redux";
import { hideSidebar } from "../store/features/productsSlice";

// Components
const CartButtons = () => {

	// Dispatch
	const dispatch = useDispatch();

	// Return
	return(
		// cart-btn-wrapped is managed by Navbar.js
		// to display or hide the component
		<Wrapper className="cart-btn-wrapper">
			{/* We close the sidebar (mobile) after a click on a link or the cart buttons */}
			<Link to="/cart" className="cart-btn" onClick={ () => { dispatch(hideSidebar()); } }>
				Cart
				<span className="cart-container">
					<FaShoppingCart/>
					<span className="cart-value">10</span>
				</span>
			</Link>
			<button type="button" className="auth-btn">
				Login <FaUserPlus/>
			</button>
		</Wrapper>
	);

};

// Styled
const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;
	width: 225px;
	.cart-btn {
		color: var(--clr-grey-1);
		font-size: 1.5rem;
		letter-spacing: var(--spacing);
		color: var(--clr-grey-1);
		display: flex;

		align-items: center;
	}
	.cart-container {
		display: flex;
		align-items: center;
		position: relative;
		svg {
			height: 1.6rem;
			margin-left: 5px;
		}
	}
	.cart-value {
		position: absolute;
		top: -10px;
		right: -16px;
		background: var(--clr-primary-5);
		width: 16px;
		height: 16px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		font-size: 0.75rem;
		color: var(--clr-white);
		padding: 12px;
	}
	.auth-btn {
		display: flex;
		align-items: center;
		background: transparent;
		border-color: transparent;
		font-size: 1.5rem;
		cursor: pointer;
		color: var(--clr-grey-1);
		letter-spacing: var(--spacing);
		svg {
			margin-left: 5px;
		}
	}
`;

// Export
export default CartButtons;