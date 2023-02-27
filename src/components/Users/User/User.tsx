import React, { FC } from "react";
import { IUser } from "../../../Types/IUser";


interface Props {
	user: IUser,
}


const User: FC<Props> = ({ user }) => {


	return (
		<div>
			<div>{user.id}</div>
			<div>{user.name}</div>
			<div>{user.status}</div>
		</div>
	)
}

export default User