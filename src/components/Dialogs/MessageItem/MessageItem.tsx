import React, { FC } from 'react';
import s from './MessageItem.module.scss'



interface Props {
	message: string,
}


const MessageItem: FC<Props> = ({ message }) => {

	return <div className={s.messageItem}>
		<div>{message}</div>
	</div>
}

export default MessageItem;