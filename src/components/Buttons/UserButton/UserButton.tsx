import React, { FC } from 'react';
import s from './UserButton.module.scss'

interface Props {
	text: string
	callback: () => void
	color?: string

}

const UserButton: FC<Props> = ({ callback, text, color = "white", }) => {


	return (<div>
		<button style={{}} onClick={callback} className={s.button}>{text}</button>
	</div>
	)
}

export default UserButton