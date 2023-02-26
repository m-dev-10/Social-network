import React, { FC } from 'react';
import s from './MessageItem.module.scss'



interface Props {
	message: string,
	// id: number,
	// deletePost: () => void
}


const MessageItem: FC<Props> = ({ message }) => {

	return <div className={s.messageItem}>
		<div>{message}</div>
	</div>
}

export default MessageItem;