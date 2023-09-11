// Imports
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";

// Component
const PrivateRoute = ({ children }) => {

	// Store
	const { myUser } = useSelector((store) => { return store.user; });

	// Return
	if (!myUser){
		return <Navigate to="/"/>
	} else {
		return children;
	}

};

// Export
export default PrivateRoute;