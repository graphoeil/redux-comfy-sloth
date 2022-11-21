// Imports
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';

// Export
const AuthWrapper = () => {
	return <h4>AuthWrapper Component</h4>
};

// Styled
const Wrapper = styled.section`
	min-height: 100vh;
	display: grid;
	place-items: center;
`;

// Export
export default AuthWrapper;