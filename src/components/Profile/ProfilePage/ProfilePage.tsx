import React, { FC } from "react";
import s from './ProfilePage.module.scss'
import userPhoto from '../../../assets/images/Users/UserPhoto.jpg'
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
interface Props {
	profile?: any,
	likes: string,
	status: string
	// deletePost: () => void
}

const ProfilePage: FC<Props> = ({ profile, status }) => {
	if (!profile) {
		return <Preloader />
	}
	return (
		<div className={s.profilePage}>
			<div className={s.profilePage__container}>
				<div className={s.avatar}><img className={s.avatarImage} src={profile?.photos?.large ? profile?.photos?.large : userPhoto} alt="Avatar" /></div>
				<div className={s.profilePage__aboutMe}>
					<div>{profile.fullName}</div>
					<div>{profile.userId}</div>
					<ProfileStatus status={status} />
				</div>
			</div>
		</div>
	)
}


export default ProfilePage