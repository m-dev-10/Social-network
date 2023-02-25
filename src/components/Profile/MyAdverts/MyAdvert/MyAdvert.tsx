import React, { FC, useState } from "react";
import DefaultButton from "../../../Buttons/DefaultButton";
import s from './MyAdvert.module.scss'
import iconLike from '../../../../assets/images/MyPosts/iconLike.svg'
import iconDislike from '../../../../assets/images/MyPosts/iconDislike.svg'

interface Props {
	message: string,
	likes: string,
	deletePost: () => void
}

const MyAdvert: FC<Props> = ({ message, likes, deletePost }) => {


	const [like, setLike] = useState(false)
	const [dislike, setDislike] = useState(false)
	const [localLike, setLocalLike] = useState(Number(likes))
	const [localDislike, setLocalDislike] = useState(Math.ceil((Number(likes) / 2)))

	const setLikeWrapper = () => {
		if (like) {
			setLocalLike(prev => prev - 1)
		}
		else {
			setLocalLike(prev => prev + 1)
		}

		setLike(prev => !prev)
	}

	const setDislikeWrapper = () => {
		if (dislike) {
			setLocalDislike(prev => prev - 1)
		}
		else {
			setLocalDislike(prev => prev + 1)
		}

		setDislike(prev => !prev)
	}



	return (
		<div className={s.advert}>
			<div className={s.advert__container}>
				<div className={s.advert__Item}>
					<div className={s.advert__picture}>	<img className={s.advert__avatar} src="https://www.perunica.ru/uploads/posts/2019-03/1552932077_1.jpg" alt="advertAvatar" /></div>
					{/* <div><button onClick={() => deletePost()}>delete post</button></div> */}
					<div className={s.advert__content}>
						<div className={s.message}>{message}</div>
						<div><img onClick={setLikeWrapper} className={`${s.iconLike} ${like ? s.iconLikeActive : ''}`} src={iconLike} alt="" /> Likes: {localLike}</div>
						<div><img onClick={setDislikeWrapper} className={`${s.iconDislike} ${dislike ? s.iconDislikeActive : ''}`} src={iconDislike} alt="" /> dislikes: {localDislike}</div>
					</div>
					<div className={s.button}><DefaultButton color={"red"} text={"delete post"} callback={deletePost} /></div>
				</div>
			</div>
		</div >
	)
}


export default MyAdvert