import React, { useState } from "react";
import s from './Dialogs.module.scss'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux'
import { Store } from "../../Redux/redux-store";



const Dialogs = () => {
	const dispatch = useDispatch<Dispatch<any>>()

	const dialogsData = useSelector((state: Store) => state.DialogsPage.DialogsData)
	const messagesData = useSelector((state: Store) => state.DialogsPage.MessagesData)

	const [currentUser, setCurrentUser] = useState(1)


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