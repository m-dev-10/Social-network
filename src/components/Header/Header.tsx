import React from "react";
import s from './Header.module.scss'
import logo from '../../assets/images/HeaderImages/logo.jpg'
import searchIcon from '../../assets/images/HeaderImages/searchIcon.svg'
import searchIconWhite from '../../assets/images/SideBarImages/iconSearchWhite.svg'


const Header = () => {
	return (
		<header className={s.header}>
			<div className={s.container}>
				<a className={s.logo} href=''><img className={s.logoImage} src={logo} alt="" /></a>
				<div>
					<input placeholder="Enter your search phrase..." className={s.input} type="text" />
					<img onClick={() => { console.log('click') }} className={s.searchIcon} src={searchIconWhite} alt="search" />
				</div>
			</div>
		</header>
	)
}


export default Header