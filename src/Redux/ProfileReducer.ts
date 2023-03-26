import { profile } from "console";
import { addPostTypesAC, deletePostAC, deletePostTypesAC, setStatusTypesAC, setUsersProfileTypesAC, updateStatusTypesAC, saveAvatarTypesAC } from "./ActionCreators";
import { ADD_POST, DELETE_POST, SAVE_AVATAR, SET_STATUS, SET_USERS_PROFILE } from "./ActionTypes";

// const SET_USERS_PROFILE = "SET_USERS_PROFILE"
// const SET_STATUS = "SET_STATUS"
// const DELETE_POST = "DELETE_POST"
// const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS"
// const ADD_ERROR = "ADD_ERROR"


let initialState = {
	PostsData: [
		{ id: 0, message: "1234567", likes: "20" },
		{ id: 1, message: "I'am fine, thank you", likes: "30" },
		{ id: 2, message: "Bye bye", likes: "56" },
		{ id: 3, message: "Hi Hi", likes: "13" },
		{ id: 4, message: "I love ps 5", likes: "28" },

	],
	profile: null || {},
	error: null,
	status: ""

}

export type StateProfileReducer = typeof initialState


export type ProfileReducerActions = addPostTypesAC | deletePostTypesAC | setUsersProfileTypesAC | setStatusTypesAC | updateStatusTypesAC | saveAvatarTypesAC


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
		case SET_USERS_PROFILE: {
			return { ...state, profile: action.profile }
		}
		case SET_STATUS: {
			console.log('reducer');
			return { ...state, status: action.status }
		}
		case SAVE_AVATAR:
			console.log('ava7')
			return {
				...state, profile: { ...state.profile, photos: action.photos }
			}

		default:
			return state
	}
}




export default ProfileReducer