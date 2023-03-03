import React, { FC } from "react";
import { IUser } from "../../../Types/IUser";
import userPhoto from '../../../assets/images/Users/UserPhoto.jpg'
import s from './User.module.scss'
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { followThunk, unFollowThunk } from "../../../Redux/ThunkCreators";
import { useSelector } from "react-redux";
import { Store } from "../../../Redux/redux-store";
import UserButton from "../../Buttons/UserButton/UserButton";

interface Props {
	user: IUser,

}


const User: FC<Props> = ({ user, }) => {
	const dispatch = useDispatch<Dispatch<any>>()

	const followingInProgress = useSelector((state: Store) => state.UsersPage.followingInProgress)

	return (
		<div className={s.user} >
			<div className={s.userPhoto} >
				<img src={!user.photos.small ? userPhoto : user.photos.small} alt="userPhoto" />
				{user.followed ? <UserButton text={"unfollow"} disabled={followingInProgress.some(id => id === user.id)} callback={() => {
					dispatch(unFollowThunk(user.id))
				}} /> : <UserButton text={"follow"} disabled={followingInProgress.some(id => id === user.id)} callback={() => {
					dispatch(followThunk(user.id));
				}} />}
			</div>
			<div className={s.userInfo}>
				<div>id: {user.id}</div>
				<div>name: {user.name}</div>
				<div>{user.status ? "status: " + user.status : ''}</div>
			</div>
		</div >
	)
}

export default User