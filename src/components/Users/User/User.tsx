import React, { FC } from "react";
import { IUser } from "../../../Types/IUser";
import userPhoto from '../../../assets/images/Users/UserPhoto.jpg'
import s from './User.module.scss'
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { followThunk, getProfileThunk, unFollowThunk } from "../../../Redux/ThunkCreators";
import { useSelector } from "react-redux";
import { Store } from "../../../Redux/redux-store";
import UserButton from "../../Buttons/UserButton/UserButton";
import { NavLink } from "react-router-dom";

interface Props {
	user: IUser,
	followingInProgress: Array<number>,
	callback: () => void
}


const User: FC<Props> = ({ user, callback, followingInProgress }) => {
	const dispatch = useDispatch<Dispatch<any>>()




	return (
		<div className={s.user} >
			<div className={s.userPhoto} >
				<NavLink to={"/profile/" + user.id}><img onClick={callback} src={!user.photos.small ? userPhoto : user.photos.small} alt="userPhoto" /></NavLink>
				{user.followed ? <UserButton text={"unfollow"} disabled={followingInProgress.some(id => id === user.id)} callback={() => {
					dispatch(unFollowThunk(user.id))
				}} /> : <UserButton text={"follow"} disabled={followingInProgress.some(id => id === user.id)} callback={() => {
					dispatch(followThunk(user.id));
				}} />}
			</div>
			<div className={s.userInfo}>
				<div><span >id:</span> {user.id}</div>
				<div><span>name:</span> {user.name}</div>
				<div style={{ color: "seagreen" }}>{user.status ? "Status: " + user.status : ''}</div>
			</div>
		</div >
	)
}

export default User