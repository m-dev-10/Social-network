import React from "react";
import { useSelector } from "react-redux";
import { Navigate, NavLink } from "react-router-dom";
import { Store } from "../../Redux/redux-store";
import s from './notFoundPage.module.scss'


const NotFoundPage = () => {


	return (
		<div className={s.notFoundPage}>
			<div className={s.contentNotFound}>
				<h1 className={s.title} >404</h1>
				<h2 className={s.subTitle}>page not found</h2>
				<div className={s.buttons}>
					<NavLink to={"/profile"}><button className={s.button}>return profile</button></NavLink>
				</div>
			</div>
		</div>
	)
}


export default NotFoundPage