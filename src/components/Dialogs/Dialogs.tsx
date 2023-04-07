import React, { useState } from "react";
import s from './Dialogs.module.scss'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import { useSelector } from 'react-redux';
import { Store } from "../../Redux/redux-store";
import { Navigate } from "react-router-dom";



const Dialogs = () => {
	const isAuth = useSelector((state: Store) => state.auth)
	const dialogsData = useSelector((state: Store) => state.DialogsPage.DialogsData)
	const messagesData = useSelector((state: Store) => state.DialogsPage.MessagesData)

	const [currentUser, setCurrentUser] = useState(1)
	if (isAuth.isAuth === false) return <Navigate to="/login" />

	return (
		<div className={s.container}>
			<div>
				{dialogsData.map((d) => {
					return <DialogItem callback={() => setCurrentUser(d.id)} id={d.id} name={d.name} />
				})}
			</div>
			<div>
				{messagesData[currentUser - 1].messages.map((d) => {
					return <MessageItem message={d} />
				})}
			</div>

		</div>
	)
}


export default Dialogs