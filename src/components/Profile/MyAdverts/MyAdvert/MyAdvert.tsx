import React from "react";
import s from './MyAdvert.module.scss'


const MyAdvert = () => {

	const AdvertData = [
		{ id: 1, name: "Максим", post: "Мой первый пост" }
	]



	return (
		<div className={s.advert}>
			<div className={s.advert__Container}>
				<div className={s.advert__Item}>
					<img className={s.advert__avatar} src="https://www.perunica.ru/uploads/posts/2019-03/1552932077_1.jpg" alt="advertAvatar" />
					<div>{AdvertData[0].name}</div>
					<div>{AdvertData[0].post}</div>
					<div></div>

				</div>
			</div>
		</div>
	)
}


export default MyAdvert