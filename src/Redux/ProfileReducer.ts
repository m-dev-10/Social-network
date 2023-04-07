import { addPostTypesAC, deletePostTypesAC, setStatusTypesAC, setUsersProfileTypesAC, updateStatusTypesAC, saveAvatarTypesAC, setMyProfileTypesAC, saveProfileTypesAC } from "./ActionCreators";
import { ADD_POST, DELETE_POST, SAVE_AVATAR, SAVE_PROFILE, SET_MY_PROFILE, SET_STATUS, SET_USERS_PROFILE } from "./ActionTypes";


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
			return { ...state, status: action.status }
		}
		case SET_MY_PROFILE: {
			return { ...state, myProfile: action.myProfile }
		}
		case SAVE_AVATAR:
			return {
				...state, profile: { ...state.profile, photos: action.photos }
			}
		case SAVE_PROFILE:
			return {
				...state, profile: action.profile
			}

		default:
			return state
	}
}




export default ProfileReducer