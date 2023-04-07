import React from "react";
import s from './Header.module.scss'
import { logOutThunk } from "../../Redux/ThunkCreators";
import { Dispatch } from 'redux'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Store } from "../../Redux/redux-store";
import Header from "./Header";


const HeaderContainer = () => {

	const isAuth = useSelector((state: Store) => state.auth)
	const dispatch = useDispatch<Dispatch<any>>()
	const myProfile = useSelector((state: Store) => state.ProfilePage.myProfile)


	const unSubmit = () => {
		dispatch(logOutThunk())
	}

	return (
		<header className={s.header}>
			<Header unSubmit={unSubmit} isAuth={isAuth} myProfile={myProfile} />
		</header>
	)
}


export default HeaderContainer