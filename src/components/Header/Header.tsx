import React from "react";
import s from './Header.module.scss'
import logo from '../../assets/images/HeaderImages/logo.jpg'
import searchIconWhite from '../../assets/images/HeaderImages//searchIconWhite.svg'


const Header = () => {
	return (
		<header className={s.header}>
			<div className={s.container}>
				<a className={s.logo} href=''><img className={s.logoImage} src={logo} alt="logo" /></a>
				<div>
					<input placeholder="Enter your search phrase..." className={s.input} type="text" />
					<img title={'Поиск...'} onClick={() => { alert('search...') }} className={s.searchIcon} src={searchIconWhite} alt="searchIcon" />
				</div>
			</div>
		</header>
	)
}


export default Header