import React from "react";
import s from './Header.module.scss'
// import logo from '../../assets/images/HeaderImages/logo.jpg'
// import searchIconWhite from '../../assets/images/HeaderImages//searchIconWhite.svg'
import { logOutThunk } from "../../Redux/ThunkCreators";
import { Dispatch } from 'redux'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Store } from "../../Redux/redux-store";
import Header from "./Header";


const HeaderContainer = () => {

	const isAuth = useSelector((state: Store) => state.auth)
	const profile = useSelector((state: Store) => state.ProfilePage.profile)
	const dispatch = useDispatch<Dispatch<any>>()
	const authorizedUserId = useSelector((state: Store) => state.auth.id)
	const myProfile = useSelector((state: Store) => state.ProfilePage.myProfile)


	const unSubmit = () => {
		console.log('start');
		dispatch(logOutThunk())
		console.log('end');
	}

	return (
		<header className={s.header}>
			<Header profile={profile} unSubmit={unSubmit} isAuth={isAuth} authorizedUserId={authorizedUserId} myProfile={myProfile} />
		</header>
	)
}


export default HeaderContainer