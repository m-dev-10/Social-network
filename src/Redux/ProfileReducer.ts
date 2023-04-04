import { profile } from "console";
import { addPostTypesAC, deletePostAC, deletePostTypesAC, setStatusTypesAC, setUsersProfileTypesAC, updateStatusTypesAC, saveAvatarTypesAC, setMyProfileTypesAC, saveProfileTypesAC } from "./ActionCreators";
import { ADD_POST, DELETE_POST, SAVE_AVATAR, SAVE_PROFILE, SET_MY_PROFILE, SET_STATUS, SET_USERS_PROFILE } from "./ActionTypes";

// const SET_USERS_PROFILE = "SET_USERS_PROFILE"
// const SET_STATUS = "SET_STATUS"
// const DELETE_POST = "DELETE_POST"
// const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS"
// const ADD_ERROR = "ADD_ERROR"


let initialState = {
	PostsData: [
		{ id: 0, message: "Lorem ipsum dolor sit amet.", likes: "20" },
		{ id: 1, message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, dolorum.", likes: "30" },
		{ id: 2, message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt qui eligendi corporis excepturi!", likes: "56" },


	],
	profile: null || {},
	myProfile: null || {},
	error: null,
	status: "",
}

export type StateProfileReducer = typeof initialState


export type ProfileReducerActions = addPostTypesAC | deletePostTypesAC | setUsersProfileTypesAC | setStatusTypesAC | updateStatusTypesAC | saveAvatarTypesAC | setMyProfileTypesAC | saveProfileTypesAC


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
		case SET_MY_PROFILE: {
			console.log(action.myProfile);
			console.log('SET_MY_PROFILE');
			return { ...state, myProfile: action.myProfile }
		}
		case SAVE_AVATAR:
			console.log('ava7')
			return {
				...state, profile: { ...state.profile, photos: action.photos }
			}
		case SAVE_PROFILE:
			console.log('data6')
			return {
				...state, profile: action.profile
			}

		default:
			return state
	}
}




export default ProfileReducer