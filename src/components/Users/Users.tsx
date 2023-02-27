import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { requestUsersThunk } from "../../Redux/ThunkCreators";
import User from "./User/User";
import s from './Users.module.scss'
import { Store } from "../../Redux/redux-store";
const Users = () => {
	const dispatch = useDispatch<Dispatch<any>>()
	const Users = useSelector((state: Store) => state.UsersPage.users)

	useEffect(
		() => {
			dispatch(requestUsersThunk(1, 10))
		}, []
	)


	return (
		<div className={s.users__container}>
			{Users.map((u) => <User user={u} />)}
		</div>
	)

}


export default Users