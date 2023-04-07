import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import MyAdvert from "./MyAdvert/MyAdvert";
import s from './MyAdverts.module.scss'
import { Dispatch } from 'redux'
import { addPostAC, deletePostAC } from "../../../Redux/ActionCreators";
import { useSelector } from "react-redux";
import { Store } from "../../../Redux/redux-store";
import DefaultButton from "../../Buttons/DefaultButton";
interface Props {
	profile?: any,
}

const MyAdverts: FC<Props> = ({ profile }) => {
	const dispatch = useDispatch<Dispatch<any>>()
	const [text, setText] = useState('')
	const posts = useSelector((state: Store) => state.ProfilePage.PostsData)


	const createAddPost = (text: string) => {
		return () => {
			if (text.length > 0) {
				dispatch(addPostAC(text))
				setText('')
			}
		}
	}

	const createDeletePost = (id: number) => {
		return () => {
			dispatch(deletePostAC(id))
		}
	}

	return (
		<div className={s.adverts}>
			<div><textarea maxLength={80} value={text} onChange={(e) => setText(e.target.value)} className={s.input__advert} placeholder="Write message..." /></div>
			<DefaultButton text={"Add post"} callback={createAddPost(text)} />
			{posts.map((ad) => <MyAdvert profile={profile} deletePost={createDeletePost(ad.id)} message={ad.message} likes={ad.likes} />)}

		</div>
	)

}

export default React.memo(MyAdverts)