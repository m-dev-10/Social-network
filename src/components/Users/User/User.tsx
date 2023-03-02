import React, { FC } from "react";
import { IUser } from "../../../Types/IUser";
import userPhoto from '../../../assets/images/Users/UserPhoto.jpg'
import s from './User.module.scss'
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { followThunk, unFollowThunk } from "../../../Redux/ThunkCreators";


interface Props {
	user: IUser,
}


const User: FC<Props> = ({ user }) => {
	const dispatch = useDispatch<Dispatch<any>>()



	return (
		<div className={s.user}>
			<div className={s.userPhoto} >
				<img src={!user.photos.small ? userPhoto : user.photos.small} alt="userPhoto" />
			</div>
			<div className={s.userInfo}>
				<div>{user.id}</div>
				<div>{user.name}</div>
				<div>{user.status}</div>
				{user.followed ? <button onClick={() => {
					dispatch(unFollowThunk(user.id))
				}}>unFollow</button> : <button onClick={() => {
					dispatch(followThunk(user.id));
				}}>follow</button>}
			</div>
		</div >
	)
}

export default User