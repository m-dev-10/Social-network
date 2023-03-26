import { authTypesAC, initializedTypesAC } from "./ActionCreators"
import { SET_INITIALIZED } from "./ActionTypes"


let initialState = {
	initialized: false
}

export type StateAppReducer = typeof initialState


export type appReducerActions = initializedTypesAC


const appReducer = (State = initialState, action: appReducerActions) => {
	switch (action.type) {
		case SET_INITIALIZED:
			return {
				...State,
				initialized: true
			}
		default:
			return State
	}
}









export default appReducer