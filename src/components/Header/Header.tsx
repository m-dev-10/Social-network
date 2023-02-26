import React from "react";
import s from './Header.module.scss'
import logo from '../../assets/images/HeaderImages/logo.jpg'
import searchIconWhite from '../../assets/images/HeaderImages//searchIconWhite.svg'
import { logOutThunk } from "../../Redux/ThunkCreators";
import { Dispatch } from 'redux'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Store } from "../../Redux/redux-store";


const Header = () => {

	const isAuth = useSelector((state: Store) => state.auth)

	const dispatch = useDispatch<Dispatch<any>>()


	const unSubmit = () => {
		console.log('start');
		dispatch(logOutThunk())
		console.log('end');
	}



	return (
		<header className={s.header}>
			<div className={s.container}>
				<a className={s.logo} href=''><img className={s.logoImage} src={logo} alt="logo" /></a>
				<div>
					<input placeholder="Enter your search phrase..." className={s.input} type="text" />
					<img title={'Поиск...'} onClick={() => { alert('search...') }} className={s.searchIcon} src={searchIconWhite} alt="searchIcon" />
					{isAuth.isAuth ? <div>{isAuth.email} <button onClick={unSubmit}>log out</button></div> : ""}

				</div>
			</div>
		</header>
	)
}


export default Header