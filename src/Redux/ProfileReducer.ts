import { addPostTypesAC, deletePostAC, deletePostTypesAC } from "./ActionCreators";
import { ADD_POST, DELETE_POST } from "./ActionTypes";

// const SET_USERS_PROFILE = "SET_USERS_PROFILE"
// const SET_STATUS = "SET_STATUS"
// const DELETE_POST = "DELETE_POST"
// const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS"
// const ADD_ERROR = "ADD_ERROR"


let initialState = {
	PostsData: [
		{ id: 0, message: "1234567", likes: "likes: 20" },
		{ id: 1, message: "I'am fine, thank you", likes: "likes: 30" },
		{ id: 2, message: "Bye bye", likes: "likes: 56" },
		{ id: 3, message: "Hi Hi", likes: "likes: 13" },
		{ id: 4, message: "I love ps 5", likes: "likes: 28" },
		{ id: 5, message: "Hi, how are you?", likes: "likes: 20" },
		{ id: 6, message: "I'am fine, thank you", likes: "likes: 30" },
		{ id: 7, message: "Bye bye", likes: "likes: 56" },
		{ id: 8, message: "Hi Hi", likes: "likes: 13" },
		{ id: 9, message: "I love ps 5", likes: "likes: 28" },
	],
	profile: null,
	error: null,
	status: ""
}

export type StateProfileReducer = typeof initialState


type ProfileReducerActions = addPostTypesAC | deletePostTypesAC


const ProfileReducer = (state = initialState, action: ProfileReducerActions) => {
	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: state.PostsData.length - 1,
				message: action.text,
				likes: "0"
			}
			return {
				...state,
				PostsData: [...state.PostsData, newPost]
			}
		case DELETE_POST:
			return {
				...state,
				PostsData: [...state.PostsData.filter((el) => {
					if (el.id !== action.id) {
						return el
					}
				})]
			}
		default:
			return state
	}
}




export default ProfileReducer