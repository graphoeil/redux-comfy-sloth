// Imports
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Export
const PageHero = () => {
	return <h4>page hero</h4>
};

// Styled
const Wrapper = styled.section`
	background: var(--clr-primary-10);
	width: 100%;
	min-height: 20vh;
	display: flex;
	align-items: center;
	color: var(--clr-primary-1);
	a {
		color: var(--clr-primary-3);
		padding: 0.5rem;
		transition: var(--transition);
	}
	a:hover {
		color: var(--clr-primary-1);
	}
`;

// Export
export default PageHero;