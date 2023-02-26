import { ADD_POST, DELETE_POST, ADD_MESSAGE, SET_USERS_DATA } from "./ActionTypes"



export type addPostTypesAC = {
	type: typeof ADD_POST,
	text: string,
}

export const addPostAC = (text: string): addPostTypesAC => {
	return { type: ADD_POST, text }
}


export type deletePostTypesAC = {
	type: typeof DELETE_POST,
	id: number,
}

export const deletePostAC = (id: number): deletePostTypesAC => {
	return { type: DELETE_POST, id }
}

export type addMessageAC = {
	type: typeof ADD_MESSAGE,
	id: number,
	messageText: string
}


export const addMessageAC = (id: number, messageText: string): addMessageAC => {
	return { type: ADD_MESSAGE, id, messageText }
}


export type authAC = {
	type: typeof SET_USERS_DATA,
	payload: {
		id: number | null,
		email: string | null,
		login: string | null,
		isAuth: boolean,
	}
}


export const authAC = (id: number | null, email: string | null, login: string | null, isAuth: boolean): authAC => {
	return { type: SET_USERS_DATA, payload: { id, email, login, isAuth } }
}



// export const logOutAC = (id: number, email: string, login: string, isAuth: boolean): authAC => {
// 	return { type: SET_USERS_DATA, payload: { id, email, login, isAuth } }
// }
