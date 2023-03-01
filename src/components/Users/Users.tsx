import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { requestUsersThunk } from "../../Redux/ThunkCreators";
import User from "./User/User";
import s from './Users.module.scss'
import { Store } from "../../Redux/redux-store";
import { setCurrentPage } from "../../Redux/ActionCreators";







const Users = () => {


	const dispatch = useDispatch<Dispatch<any>>()
	const Users = useSelector((state: Store) => state.UsersPage.users)
	const pageSize = useSelector((state: Store) => state.UsersPage.pageSize)
	const totalUsersCount = useSelector((state: Store) => state.UsersPage.totalUsersCount)
	const currentPage = useSelector((state: Store) => state.UsersPage.currentPage)

	useEffect(
		() => {
			dispatch(requestUsersThunk(currentPage, 10))
		}, []
	)


	const onPageChenged = (p: number) => {
		dispatch(setCurrentPage(p))
	}



	let pagesCount = totalUsersCount / pageSize

	let pages = []
	for (let i = 1; i < pagesCount; i++) {
		pages.push(i)
	}

	return (
		<div className={s.users__container}>
			<div>{pages.map((p) => { return <span onClick={(e) => onPageChenged(p)} className={currentPage === p ? s.selectedPage : ''}>{p}</span> })}</div>
			{Users.map((u) => <User user={u} />)}
		</div>
	)

}


export default Users