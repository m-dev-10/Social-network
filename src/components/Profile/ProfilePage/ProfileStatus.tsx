import React, { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { updateStatusThunk } from "../../../Redux/ThunkCreators";
import s from './ProfileStatus.module.scss'

interface Props {
	status: string
	updateStatus: (localStatus: string) => void
}


const ProfileStatus: FC<Props> = ({ status, updateStatus }) => {

	const [editMode, setEditMode] = useState(false)

	const [localStatus, setLocalStatus] = useState(status)

	useEffect(
		() => {
			setLocalStatus(status)
		}, [status]
	)
	const activateEditMode = () => {
		setEditMode(true)
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
			? <div><span onDoubleClick={activateEditMode}>status: {status ? status : '-----'}</span></div>
			: <div><input className={s.inputStatus} onChange={onStatusChange} value={localStatus} onBlur={deActivateEditMode} autoFocus={true} type="text" /></div>}
		</div>
	)
}

export default ProfileStatus