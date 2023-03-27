import React, { FC } from "react";
import s from './ProfilePage.module.scss'
import userPhoto from '../../../assets/images/Users/UserPhoto.jpg'
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
interface Props {
	isOwner: boolean
	profile?: any,
	likes: string,
	status: string
	updateStatus: (status: string) => void
	savePhoto: (e: any) => void
}

const ProfilePage: FC<Props> = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
	if (!profile) {
		return <Preloader />
	}

	const avatarSelected = (e: any) => {
		if (e.target.files.length) {
			savePhoto(e.target.files[0])
			console.log('ava1');
		}
	}


	return (
		<div className={s.profilePage}>
			<div className={s.profilePage__container}>
				<div className={s.avatar}><img className={s.avatarImage} src={profile?.photos?.large ? profile?.photos?.large : userPhoto} alt="avatar" />
					<div>{isOwner && <div className={s.inputFile}>
						<input id={"inputAvatar"} type={"file"} className={s.inputAvatar} onChange={avatarSelected} />
						<label className={s.inputAvatarLabel} htmlFor="inputAvatar">Add avatar</label>
					</div>}</div>
				</div>
				<div className={s.profilePage__aboutMe}>
					<div><span>name:</span> {profile.fullName}</div>
					<div><span>lookingForAJob:</span> {profile.lookingForAJob ? "yes" : "no"}</div>
					<div><span>aboutMe:</span> {profile.aboutMe ? profile.aboutMe : '---'}</div>
					<div className={s.status}><ProfileStatus style={{ color: "red" }} isOwner={isOwner} status={status} updateStatus={updateStatus} /></div>
				</div>
			</div>
		</div>
	)
}


export default ProfilePage