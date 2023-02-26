import { authAPI } from "../API/API"
import { authAC } from "./ActionCreators"
import { AuthReducerActions } from "./AuthReducer"
import { ActionT } from "./redux-types"


export const authThunk = (): ActionT<AuthReducerActions> => async (dispatch) => {
	let response = await authAPI.setAuth()
	if (response.data.resultCode === 0) {
		// let { id, login, email } = response.data.data
		let { id, email, login } = response.data.data
		console.log('resposne', response);
		// console.log('id, login, email ', id, login, response);
		console.log('e', email, 'l', login);
		dispatch(authAC(id, email, login, true))
	}
}

export const loginThunk = (login: string, password: string, rememberMe: boolean): ActionT<AuthReducerActions> => async (dispatch) => {
	let response = await authAPI.login(login, password, rememberMe)
	if (response.data.resultCode === 0) {
		// let { id, login, email } = response.data.data
		let id = response.data.data.userId
		console.log('id, login, email ', id, login, password, response);
		console.log("123", login);
		//dispatch(authAC(id, "", login, true))
		dispatch(authThunk())
	}
}



export const logOutThunk = (): ActionT<AuthReducerActions> => async (dispatch) => {
	let response = await authAPI.logout()
	if (response.data.resultCode === 0) {
		// let { id, login, email } = response.data.data
		// let id = response.data.data.userId
		// console.log('id, login, email ', id, login, password, response);
		dispatch(authAC(null, null, null, false))
	}
}