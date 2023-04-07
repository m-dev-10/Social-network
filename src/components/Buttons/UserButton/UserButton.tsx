import React, { FC } from 'react';
import s from './UserButton.module.scss'

interface Props {
	text: string
	callback: () => void
	color?: string
	disabled?: boolean
}

const UserButton: FC<Props> = ({ callback, text, color = "white", disabled }) => {

	return (<div>
		<button style={{}} disabled={disabled} onClick={callback} className={s.button}>{text}</button>
	</div>
	)
}

export default UserButton