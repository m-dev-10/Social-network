import React, { FC } from "react";
import s from './ProfilePage.module.scss'
import userPhoto from '../../../assets/images/Users/UserPhoto.jpg'
import Preloader from "../../../common/Preloader/Preloader";
interface Props {
	profile?: any,
	likes: string,
	// deletePost: () => void
}

const ProfilePage: FC<Props> = ({ profile }) => {
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
				</div>
			</div>
		</div>
	)
}


export default ProfilePage