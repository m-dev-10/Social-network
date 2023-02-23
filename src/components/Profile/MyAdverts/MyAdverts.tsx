import React, { useState } from "react";
import { useDispatch } from "react-redux";
import MyAdvert from "./MyAdvert/MyAdvert";
import s from './MyAdverts.module.scss'
import { Dispatch } from 'redux'
import { addPostAC, deletePostAC } from "../../../Redux/ActionCreators";
import { useSelector } from "react-redux";
import { Store } from "../../../Redux/redux-store";

const MyAdverts = () => {

	const [text, setText] = useState('')

	const dispatch = useDispatch<Dispatch<any>>()

	const posts = useSelector((state: Store) => state.ProfilePage.PostsData)


	const addPost = (text: string) => {
		dispatch(addPostAC(text))
		setText('')
	}

	const createDeletePost = (id: number) => {
		return () => {
			dispatch(deletePostAC(id))
		}
	}

	return (
		<div>
			<div><input value={text} onChange={(e) => setText(e.target.value)} className={s.input__advert} type="text" /></div>
			<div><button onClick={() => addPost(text)} >add post</button></div>
			{posts.map((ad) => <MyAdvert deletePost={createDeletePost(ad.id)} message={ad.message} likes={ad.likes} />)}

		</div>
	)

}

export default MyAdverts