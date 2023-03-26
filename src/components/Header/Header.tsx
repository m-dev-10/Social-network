import React, { FC } from "react";
import s from './Header.module.scss'
import logo from '../../assets/images/HeaderImages/logo.jpg'
import searchIconWhite from '../../assets/images/HeaderImages//searchIconWhite.svg'
import { logOutThunk } from "../../Redux/ThunkCreators";
import { Dispatch } from 'redux'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Store } from "../../Redux/redux-store";
import { Navigate, NavLink } from 'react-router-dom';
import userPhoto from '../../assets/images/Users/UserPhoto.jpg'

interface Props {
	isAuth: any
	profile?: any
	unSubmit: () => void
	authorizedUserId: number | null
}

const Header: FC<Props> = ({ isAuth, unSubmit, profile, authorizedUserId }) => {

	// const isAuth = useSelector((state: Store) => state.auth)

	// const dispatch = useDispatch<Dispatch<any>>()


	// const unSubmit = () => {
	// 	console.log('start');
	// 	dispatch(logOutThunk())
	// 	console.log('end');
	// }

	return (
		<header className={s.header}>
			<div className={s.container}>
				<a className={s.logo} href=''><img className={s.logoImage} src={logo} alt="logo" /></a>

				<div className={s.search}>
					<input placeholder="Enter your search phrase..." className={s.input} type="text" />
					<img title={'Поиск...'} onClick={() => { alert('search...') }} className={s.searchIcon} src={searchIconWhite} alt="searchIcon" />
				</div>
				<div className={s.logout}>
					{isAuth.isAuth ? <div><img className={s.headerImage} src={profile?.photos?.small && profile.id == 27287 ? profile?.photos?.small : ""} alt="avatar" />{isAuth.login}<button className={s.button} onClick={unSubmit}>log out</button></div> : <NavLink to="/login"></NavLink>}
				</div>
			</div>

		</header>
	)
}


export default Header