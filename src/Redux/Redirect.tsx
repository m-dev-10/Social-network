import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Store } from "../Redux/redux-store";

const Redirect = () => {
	const isAuth = useSelector((state: Store) => state.auth)

	if (!isAuth.isAuth) {
		return <Navigate to="/login" />
	}

	return <Navigate to="/profile" />
}




export default Redirect