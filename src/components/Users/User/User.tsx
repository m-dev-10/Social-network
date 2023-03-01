import React, { FC } from "react";
import { IUser } from "../../../Types/IUser";
import userPhoto from '../../../assets/images/Users/UserPhoto.jpg'
import s from './User.module.scss'
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";


interface Props {
	user: IUser,
}


const User: FC<Props> = ({ user }) => {
	// const dispatch = useDispatch<Dispatch<any>>()

	return (
		<div className={s.user}>
			<div className={s.userPhoto} >
				<img src={userPhoto} alt="userPhoto" />
				<button onClick={() => {
					console.log('click');
				}}>follow</button>
			</div>
			<div className={s.userInfo}>
				<div>{user.id}</div>
				<div>{user.name}</div>
				<div>{user.status}</div>
			</div>
		</div >
	)
}

export default User