import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { getProfileThunk, requestUsersThunk } from "../../Redux/ThunkCreators";
import User from "./User/User";
import s from './Users.module.scss'
import { Store } from "../../Redux/redux-store";
import { setCurrentPage } from "../../Redux/ActionCreators";
import Paginator from "../../common/Paginator/Paginator";
import Preloader from "../../common/Preloader/Preloader";







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
			dispatch(requestUsersThunk(currentPage, 10))
		}, [currentPage]
	)



	// let pagesCount = Math.ceil(totalItemsCount / pageSize)
	// let pages = []
	// for (let i = 1; i <= pagesCount; i++) {
	// 	pages.push(i)
	// }



	return (
		<div className={s.users__container}>
			{isFetching ? <Preloader /> : null}
			<div><Paginator portionSize={portionSize} currentPage={currentPage} totalItemsCount={totalItemsCount} pageSize={pageSize} /></div>
			{/* <div>{pages.map((p) => { return <span onClick={() => dispatch(setCurrentPage(p))} className={currentPage === p ? s.selectedPage : ''}>{p}</span> })}</div> */}
			<div className={s.usersList}>{Users.map((u) => <User followingInProgress={followingInProgress} user={u} callback={() => dispatch(getProfileThunk(u.id))} />)}</div>
		</div>
	)

}


export default Users