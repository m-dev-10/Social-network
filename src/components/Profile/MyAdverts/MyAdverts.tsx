import React from "react";
import MyAdvert from "./MyAdvert/MyAdvert";
import s from './MyAdverts.module.scss'


const MyAdverts = () => {
	return (
		<div className={s.adverts}><MyAdvert /></div>
	)
}


export default MyAdverts