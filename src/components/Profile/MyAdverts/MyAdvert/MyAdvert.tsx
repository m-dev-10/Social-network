import React, { FC } from "react";
import s from './MyAdvert.module.scss'

interface Props {
	message: string,
	likes: string,
	deletePost: () => void
}

const MyAdvert: FC<Props> = ({ message, likes, deletePost }) => {



	return (
		<div className={s.advert}>
			<div className={s.advert__Container}>
				<div className={s.advert__Item}>
					<img className={s.advert__avatar} src="https://www.perunica.ru/uploads/posts/2019-03/1552932077_1.jpg" alt="advertAvatar" />
					<div>{message}</div>
					<div>{likes}</div>
					<div><button onClick={() => deletePost()}>delete post</button></div>
				</div>
			</div>
		</div>
	)
}


export default MyAdvert