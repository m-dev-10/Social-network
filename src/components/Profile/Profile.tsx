import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Store } from "../../Redux/redux-store";
import MyAdverts from "./MyAdverts/MyAdverts";
import s from './Profile.module.scss'
import ProfilePage from "./ProfilePage/ProfilePage";

const Profile = () => {

	const isAuth = useSelector((state: Store) => state.auth)

	if (!isAuth.isAuth) {
		return <Navigate to="/login" />
	}


	return (
		<div className={s.profile}>
			<ProfilePage />
			<MyAdverts />
		</div>
	)
}


export default Profile