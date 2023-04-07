import React, { FC, useEffect, useState } from "react";
import s from './ProfileStatus.module.scss'

interface Props {
	isOwner: boolean
	status: string
	updateStatus: (localStatus: string) => void
	style: any
}


const ProfileStatus: FC<Props> = ({ status, updateStatus, style, isOwner }) => {
	const [editMode, setEditMode] = useState(false)
	const [localStatus, setLocalStatus] = useState(status)

	useEffect(
		() => {
			setLocalStatus(status)
		}, [status]
	)
	const activateEditMode = () => {
		if (isOwner) {
			setEditMode(true)
		}

	}

	const deActivateEditMode = () => {
		setEditMode(false)
		updateStatus(localStatus)
	}

	const onStatusChange = (e: any) => {
		setLocalStatus(e.currentTarget.value)
	}

	return (
		<div>{!editMode
			? <div><span style={style} onDoubleClick={activateEditMode}>status: {status ? status : '---'}</span></div>
			: <div><input maxLength={45} className={s.inputStatus} onChange={onStatusChange} value={localStatus} onBlur={deActivateEditMode} autoFocus={true} type="text" /></div>}
		</div>
	)
}

export default ProfileStatus