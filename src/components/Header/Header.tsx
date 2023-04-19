import React, { FC } from "react";
import s from './Header.module.scss'
import logo from '../../assets/images/HeaderImages/logo.jpg'
import searchIconWhite from '../../assets/images/HeaderImages//searchIconWhite.svg'
import { NavLink } from 'react-router-dom';


interface Props {
	isAuth: any
	myProfile: any
	unSubmit: () => void
}

const Header: FC<Props> = ({ isAuth, unSubmit, myProfile }) => {
	// console.log('header');

	return (
		<header className={s.header}>
			<div className={s.container}>
				<div><a className={s.logo} href=''><img className={s.logoImage} src={logo} alt="logo" /></a></div>
				<div className={s.search}>
					<input placeholder="Enter your search phrase..." className={s.input} type="text" />
					<img title={'Поиск...'} onClick={() => { alert('search...') }} className={s.searchIcon} src={searchIconWhite} alt="searchIcon" />
				</div>
				<div className={s.logout}>
					{isAuth.isAuth ? <div><img className={s.headerImage} src={myProfile?.photos?.small && myProfile?.photos?.small} alt="avatar" />{isAuth.login}<button className={s.button} onClick={unSubmit}>log out</button></div> : <NavLink to="/login"></NavLink>}
				</div>
			</div>
		</header>
	)
}

export default Header