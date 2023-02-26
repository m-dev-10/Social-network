import React, { FC } from 'react';
import s from './DialogItem.module.scss'
import dialogPhoto from '../../../assets/images/DIalogsImages/dialogPhoto.jpg'

interface Props {
	name: string,
	id: number,
	callback: () => void
}

const DialogItem: FC<Props> = ({ id, name, callback }) => {


	return <div className={s.dialogItem}>
		<div>
			<a href="" className={s.dialogPicture}>
				<img src={dialogPhoto} alt="" />
			</a>
			<div onClick={callback} >{name}</div>
		</div>
	</div>
}


export default DialogItem;