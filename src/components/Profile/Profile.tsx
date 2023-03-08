import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Dispatch } from "redux";
import { setUsersProfileAC } from "../../Redux/ActionCreators";
import { Store } from "../../Redux/redux-store";
import { getProfileThunk } from "../../Redux/ThunkCreators";
import MyAdverts from "./MyAdverts/MyAdverts";
import s from './Profile.module.scss'
import ProfilePage from "./ProfilePage/ProfilePage";





const Profile = () => {

	const isAuth = useSelector((state: Store) => state.auth)
	const profile = useSelector((state: Store) => state.ProfilePage.profile)
	const dispatch = useDispatch<Dispatch<any>>()
	// useEffect(
	// 	() => {
	// 		dispatch(setUsersProfileAC(profile))
	// 	}, []
	// )


	if (!isAuth.isAuth) {
		return <Navigate to="/login" />
	}


	return (
		<div className={s.profile}>
			<ProfilePage profile={profile} likes={""} />
			<MyAdverts />
		</div>
	)
}


export default Profile