import React from "react";
import User from "./User/User";
import s from './Users.module.scss'

const Users = () => {

	return (
		<div className={s.users__container}>
			<User />
		</div>
	)

}


export default Users