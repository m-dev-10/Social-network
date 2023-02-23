import { ADD_POST, DELETE_POST } from "./ActionTypes"



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

