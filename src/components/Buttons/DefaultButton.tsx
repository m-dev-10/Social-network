import React, { FC } from 'react';
import { redirect } from 'react-router-dom';
import s from './DefaultButton.module.scss'

interface Props {
	text: string
	callback: () => void
	color?: string

}

const DefaultButton: FC<Props> = ({ callback, text, color = "white", }) => {


	return (<div>
		<button style={{ color: color }} onClick={callback} className={s.button}>{text}</button>
	</div>
	)
}

export default DefaultButton