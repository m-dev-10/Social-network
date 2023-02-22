import React from "react";
import MyAdverts from "./MyAdverts/MyAdverts";
import s from './Profile.module.scss'
import ProfilePage from "./ProfilePage/ProfilePage";


const Profile = () => {
	return (
		<div className={s.profile}>
			<ProfilePage />
			<MyAdverts />
		</div>
	)
}


export default Profile