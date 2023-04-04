import React, { FC } from 'react';
import s from './ProfileInfoButton.module.scss'

interface Props {
	text: string
	callback: () => void
	// onSubmit: () => void
}

const ProfileInfoButton: FC<Props> = ({ text, callback }) => {
	return (<div>
		<div><button onClick={callback} className={s.button}>{text}</button></div>
	</div>
	)
}

export default ProfileInfoButton