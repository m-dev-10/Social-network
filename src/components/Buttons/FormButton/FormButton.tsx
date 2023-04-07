import React, { FC } from 'react';
import s from './FormButton.module.scss'

interface Props {
	text: string
}

const FormButton: FC<Props> = ({ text }) => {
	return (<div>
		<div><button className={s.button}>{text}</button></div>
	</div>
	)
}

export default FormButton