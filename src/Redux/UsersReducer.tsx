import { authAC } from "./ActionCreators"
import { SET_USERS_DATA } from "./ActionTypes"


let initialState = {
	id: null,
	email: null,
	login: null,
	isAuth: false,
	capchaUrl: null, // if null, then captcha is not required
}

export type StateAuthReducer = typeof initialState


export type AuthReducerActions = authAC


const AuthReducer = (State = initialState, action: AuthReducerActions) => {
	switch (action.type) {
		case SET_USERS_DATA:
			return {
				...State,
				...action.payload
			}
		default:
			return State
	}
}









export default AuthReducer