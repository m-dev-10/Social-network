import React, { FC, } from "react";
import ProfileInfoButton from "../../../Buttons/ProfileButton/ProfileInfoButton";
import s from './ProfileInfo.module.scss'

interface Props {
	profile?: any,
	isOwner: boolean,
	goToEditMode: () => void
}


const ProfileInfo: FC<Props> = ({ profile, isOwner, goToEditMode }) => {

	return (
		<div className={s.profileInfo}>
			<div><span>name:</span> {profile.fullName}</div>
			<div><span>lookingForAJob:</span> {profile.lookingForAJob ? "yes" : "no"}</div>
			<div><span>LookingForAJobDescription:</span> {profile.lookingForAJobDescription ? "yes" : '---'}</div>
			<div><span>aboutMe:</span> {profile.aboutMe ? profile.aboutMe : '---'}</div>
			{isOwner && <ProfileInfoButton callback={goToEditMode} text={"Edit profile"} />}
		</div>
	)
}

export default ProfileInfo