import React, { FC } from "react";
import s from './ProfilePage.module.scss'
import userPhoto from '../../../assets/images/Users/UserPhoto.jpg'
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
interface Props {
	profile?: any,
	likes: string,
	status: string
	updateStatus: (status: string) => void
}

const ProfilePage: FC<Props> = ({ profile, status, updateStatus }) => {
	if (!profile) {
		return <Preloader />
	}
	return (
		<div className={s.profilePage}>
			<div className={s.profilePage__container}>
				<div className={s.avatar}><img className={s.avatarImage} src={profile?.photos?.large ? profile?.photos?.large : userPhoto} alt="Avatar" /></div>
				<div className={s.profilePage__aboutMe}>
					<div>name: {profile.fullName}</div>
					<div><ProfileStatus status={status} updateStatus={updateStatus} /></div>
				</div>
			</div>
		</div>
	)
}


export default ProfilePage