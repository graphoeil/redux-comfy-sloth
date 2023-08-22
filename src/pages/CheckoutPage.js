// Imports
import React from 'react';
import styled from 'styled-components';
import { PageHero, StripeCheckout } from '../components';
// Extra imports
import { Link } from 'react-router-dom';

// Component
const CheckoutPage = () => {

	// Return
	return(
		<main>
			<PageHero title="checkout"/>
			<Wrapper className="page">
				
			</Wrapper>
		</main>
	);

};

// Styled
const Wrapper = styled.div`

`;

// Export
export default CheckoutPage;