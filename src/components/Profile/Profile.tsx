import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Dispatch } from "redux";
import { setUsersProfileAC } from "../../Redux/ActionCreators";
import store, { Store } from "../../Redux/redux-store";
import { getProfileThunk, getStatusThunk, saveAvatarThunk, updateStatusThunk } from "../../Redux/ThunkCreators";
import MyAdverts from "./MyAdverts/MyAdverts";
import s from './Profile.module.scss'
import ProfilePage from "./ProfilePage/ProfilePage";
import { useParams } from 'react-router-dom';
// import { useHistory } from "react-router";




const Profile = () => {
	// const hist = useHistory()
	const isAuth = useSelector((state: Store) => state.auth)
	const profile = useSelector((state: Store) => state.ProfilePage.profile)
	const status = useSelector((state: Store) => state.ProfilePage.status)
	const authorizedUserId = useSelector((state: Store) => state.auth.id)
	const dispatch = useDispatch<Dispatch<any>>()
	const params = useParams();
	const current = params.userId;
	let userId = Number(current);


	useEffect(
		() => {
			if (!userId) {
				userId = authorizedUserId
			}
			dispatch(getProfileThunk(userId))
			dispatch(getStatusThunk(userId))
		}, [status, userId]
	)

	const updateStatus = (status: string) => {
		dispatch(updateStatusThunk(status))
	}

	const savePhoto = (e: any) => {
		dispatch(saveAvatarThunk(e))
		console.log('ava2');

	}

	if (!isAuth.isAuth) {
		return <Navigate to="/login" />
	}


	return (
		<div className={s.profile}>
			<ProfilePage status={status} profile={profile} likes={""} updateStatus={updateStatus} savePhoto={savePhoto} isOwner={!userId} />
			{/* {!userId && <MyAdverts profile={profile} />} */}
			<MyAdverts profile={profile} />
		</div>
	)
}


export default Profile