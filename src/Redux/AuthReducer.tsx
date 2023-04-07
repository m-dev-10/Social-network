import { authTypesAC, getCaptchaUrlTypesAC, } from "./ActionCreators"
import { CAPTCHA_URL, SET_USERS_DATA } from "./ActionTypes"


let initialState = {
	id: null || 0,
	email: null,
	login: null,
	isAuth: false,
	captchaUrl: null, // if null, then captcha is not required
}

export type StateAuthReducer = typeof initialState


export type AuthReducerActions = authTypesAC | getCaptchaUrlTypesAC


const AuthReducer = (State = initialState, action: AuthReducerActions) => {
	switch (action.type) {
		case SET_USERS_DATA:
			return {
				...State,
				...action.payload,
			}
		case CAPTCHA_URL:
			return {
				...State,
				...action.payload,
			}
		default:
			return State
	}
}









export default AuthReducer