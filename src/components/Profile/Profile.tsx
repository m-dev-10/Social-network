import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Dispatch } from "redux";
import { Store } from "../../Redux/redux-store";
import { getProfileThunk, getStatusThunk, saveAvatarThunk, saveProfileThunk, updateStatusThunk } from "../../Redux/ThunkCreators";
import MyAdverts from "./MyAdverts/MyAdverts";
import s from './Profile.module.scss'
import ProfilePage from "./ProfilePage/ProfilePage";
import { useParams } from 'react-router-dom';



const Profile = () => {

	const isAuth = useSelector((state: Store) => state.auth)
	const profile = useSelector((state: Store) => state.ProfilePage.profile)
	const status = useSelector((state: Store) => state.ProfilePage.status)
	const authorizedUserId = useSelector((state: Store) => state.auth.id)
	const dispatch = useDispatch<Dispatch<any>>()
	const params = useParams();
	const current = params.userId;
	const myProfile = useSelector((state: Store) => state.ProfilePage.myProfile)
	let userId = Number(current);
	const [editMode, setEditMode] = useState(false)

	useEffect(
		() => {
			if (!userId) {
				userId = authorizedUserId
			}
			dispatch(getProfileThunk(userId))
			dispatch(getStatusThunk(userId))
		}, [status, userId,]
	)


	const updateStatus = (status: string) => {
		dispatch(updateStatusThunk(status))
	}
	const savePhoto = (e: any, authorizedUserId: number) => {
		dispatch(saveAvatarThunk(e, authorizedUserId))
	}
	const savePhotoSelected = (e: any) => {
		if (e.target.files.length) {
			savePhoto(e.target.files[0], authorizedUserId)
		}
	}

	const goToEditMode = () => {
		setEditMode(true)
	}

	const saveProfileSelected = (profile: any) => {
		dispatch(saveProfileThunk(profile))
		setEditMode(false)
	}

	if (!isAuth.isAuth) {
		return <Navigate to="/login" />
	}

	return (
		<div className={s.profile}>
			<ProfilePage status={status} editMode={editMode} goToEditMode={goToEditMode} saveProfileSelected={saveProfileSelected} profile={profile} likes={""} updateStatus={updateStatus} savePhotoSelected={savePhotoSelected} isOwner={!userId} />
			<MyAdverts profile={myProfile} />
		</div>
	)
}


export default Profile