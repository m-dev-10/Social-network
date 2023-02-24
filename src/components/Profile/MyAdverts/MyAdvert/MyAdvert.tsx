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



	return (
		<div className={s.advert}>
			<div className={s.advert__container}>
				<div className={s.advert__Item}>
					<div className={s.advert__picture}>	<img className={s.advert__avatar} src="https://www.perunica.ru/uploads/posts/2019-03/1552932077_1.jpg" alt="advertAvatar" /></div>
					{/* <div><button onClick={() => deletePost()}>delete post</button></div> */}
					<div>
						<div>{message}</div>
						<div>{localLike}</div>
						<div onClick={setLikeWrapper} className={`${s.iconLike} ${like ? s.iconLikeDeg : ''}`}><img src={iconLike} alt="" /></div >
						{/* <img className={`${s.iconDislike} ${disLike ? s.iconDislikeDeg : ''}`} src={iconDislike} alt="" /> */}
						<DefaultButton color={"red"} text={"delete post"} callback={deletePost} />
					</div>
				</div>
			</div>
		</div >
	)
}


export default MyAdvert