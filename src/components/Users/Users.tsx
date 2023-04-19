import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { requestUsersThunk } from "../../Redux/ThunkCreators";
import User from "./User/User";
import s from './Users.module.scss'
import { Store } from "../../Redux/redux-store";
import Paginator from "../../common/Paginator/Paginator";
import Preloader from "../../common/Preloader/Preloader";
import { followThunk, unFollowThunk } from "../../Redux/ThunkCreators";



const Users = () => {
	const dispatch = useDispatch<Dispatch<any>>()
	const Users = useSelector((state: Store) => state.UsersPage.users)
	const pageSize = useSelector((state: Store) => state.UsersPage.pageSize)
	const totalItemsCount = useSelector((state: Store) => state.UsersPage.totalItemsCount)
	const currentPage = useSelector((state: Store) => state.UsersPage.currentPage)
	const portionSize = useSelector((state: Store) => state.UsersPage.portionSize)
	const isFetching = useSelector((state: Store) => state.UsersPage.isFetching)
	const followingInProgress = useSelector((state: Store) => state.UsersPage.followingInProgress)

	useEffect(
		() => {
			dispatch(requestUsersThunk(currentPage, 16))
		}, [currentPage]
	)

	const follow = (userId: number) => {
		dispatch(followThunk(userId))
	}
	const unFollow = (userId: number) => {
		dispatch(unFollowThunk(userId))
	}

	return (
		<div className={s.users__container}>
			{isFetching ? <Preloader /> : null}
			<div><Paginator portionSize={portionSize} currentPage={currentPage} totalItemsCount={totalItemsCount} pageSize={pageSize} /></div>
			<div className={s.usersList}>{Users.map((u) => <User key={u.id} followingInProgress={followingInProgress} user={u} follow={follow} unFollow={unFollow} />)}</div>
		</div>
	)
}

export default Users