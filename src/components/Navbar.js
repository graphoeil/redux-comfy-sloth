// Imports
import React from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { showSidebar } from "../store/features/productsSlice";
import { links } from '../utils/constants';
import logo from '../assets/logo.svg';
import CartButtons from './CartButtons';

// Component
const Nav = () => {

	// Dispatch
	const dispatch = useDispatch();

	// Return
	return(
		<NavContainer>
			<div className="nav-center">
				<div className="nav-header">
					<Link to="/">
						<img src={ logo } alt="Comfy Sloth" />
					</Link>
					<button type="button" className="nav-toggle" onClick={ () => { dispatch(showSidebar()); } }>
						<FaBars/>
					</button>
				</div>
				<ul className="nav-links">
					{
						links.map((link) => {
							const { id, text, url } = link;
							return(
								<li key={ id }>
									<NavLink key={ id } to={ url } className={ ({ isActive }) => {
										return isActive ? 'active' : '';
									} } end>
										{ text }
									</NavLink>
								</li>
							);
						})
					}
					<li>
						<NavLink to="/checkout" className={ ({ isActive }) => {
							return isActive ? 'active' : '';
						} } end>
							Checkout
						</NavLink>
					</li>
				</ul>
				<CartButtons/>
			</div>
		</NavContainer>
	);
	
};

// Styled
const NavContainer = styled.nav`
	height: 5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	.nav-center {
		width: 90vw;
		margin: 0 auto;
		max-width: var(--max-width);
	}
	.nav-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		img {
			width: 175px;
			margin-left: -15px;
		}
	}
	.nav-toggle {
		background: transparent;
		border: transparent;
		color: var(--clr-primary-5);
		cursor: pointer;
		svg {
			font-size: 2rem;
		}
	}
	.nav-links {
		display: none;
	}
	.cart-btn-wrapper {
		display: none;
	}
	@media (min-width: 992px) {
		.nav-toggle {
			display: none;
		}
		.nav-center {
			display: grid;
			grid-template-columns: auto 1fr auto;
			align-items: center;
		}
		.nav-links {
			display: flex;
			justify-content: center;
			li {
				margin: 0 0.5rem;
			}
			a {
				color: var(--clr-grey-3);
				font-size: 1rem;
				text-transform: capitalize;
				letter-spacing: var(--spacing);
				padding: 0.5rem;
				&:hover {
					border-bottom: 2px solid var(--clr-primary-7);
				}
				&.active{
					font-weight: bold;
					border-bottom: 2px solid var(--clr-primary-7);
				}
			}
		}
		.cart-btn-wrapper {
			display: grid;
		}
	}
`;

// Export
export default Nav;