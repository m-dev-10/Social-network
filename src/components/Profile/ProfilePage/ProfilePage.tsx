import React from "react";
import s from './ProfilePage.module.scss'


const ProfilePage = () => {
	return (
		<div className={s.profilePage}>
			<div className={s.profilePage__container}>
				<div className={s.avatar}><img className={s.avatarImage} src="https://www.perunica.ru/uploads/posts/2019-03/1552932077_1.jpg" alt="Avatar" /></div>
				<div className={s.profilePage__aboutMe}>
					<div>Name: Максим</div>
					<div>Status: цветы лучше пуль</div>
				</div>
			</div>
		</div>
	)
}


export default ProfilePage