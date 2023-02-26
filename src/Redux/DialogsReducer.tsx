import { addMessageAC } from "./ActionCreators";
import { ADD_MESSAGE } from "./ActionTypes";

let initialState = {
	DialogsData: [
		{ id: 1, name: "Maksim" },
		{ id: 2, name: "Alisa" },
		{ id: 3, name: "Olesya" },
		{ id: 4, name: "Sasha" },
		{ id: 5, name: "Andrey" },],

	MessagesData: [
		{ id: 1, messages: ["hi", "hello", "hello", "hello"] },
		{ id: 2, messages: ["qwer", "hello", "hello", "hello"] },
		{ id: 3, messages: ["123456", "hello", "hello", "hello"] },
		{ id: 4, messages: ["bye", "hello", "hello", "hello"] },
		{ id: 5, messages: ["zxcvb", "hello", "hello", "hello"] },
	],
}

export type StateDialogsReducer = typeof initialState


type DialogsReducerActions = addMessageAC


const DialogsReducer = (State = initialState, action: DialogsReducerActions) => {
	switch (action.type) {
		case ADD_MESSAGE:
			let body = action.messageText
			return {
				...State,
				MessagesData: [...State.MessagesData, { id: 2, message: body }]
			}
		default:
			return State
	}
}









export default DialogsReducer