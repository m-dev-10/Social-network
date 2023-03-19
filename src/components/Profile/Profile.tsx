import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Dispatch } from "redux";
import { setUsersProfileAC } from "../../Redux/ActionCreators";
import { Store } from "../../Redux/redux-store";
import { getProfileThunk, getStatusThunk, updateStatusThunk } from "../../Redux/ThunkCreators";
import MyAdverts from "./MyAdverts/MyAdverts";
import s from './Profile.module.scss'
import ProfilePage from "./ProfilePage/ProfilePage";
import { useParams } from 'react-router-dom';




const Profile = () => {

	const isAuth = useSelector((state: Store) => state.auth)
	const profile = useSelector((state: Store) => state.ProfilePage.profile)
	const status = useSelector((state: Store) => state.ProfilePage.status)
	const dispatch = useDispatch<Dispatch<any>>()
	const params = useParams();
	const current = params.userId;
	let userId = Number(current);

	if (!userId) {
		userId = 27287
	}
	useEffect(
		() => {
			dispatch(getProfileThunk(userId))
			dispatch(getStatusThunk(userId))
		}, [status]
	)

	const updateStatus = (status: string) => {
		dispatch(updateStatusThunk(status))
	}

	if (!isAuth.isAuth) {
		return <Navigate to="/login" />
	}


	return (
		<div className={s.profile}>
			<ProfilePage status={status} profile={profile} likes={""} updateStatus={updateStatus} />
			<MyAdverts />
		</div>
	)
}


export default Profile