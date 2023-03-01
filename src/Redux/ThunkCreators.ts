import { authAPI, usersAPI } from "../API/API"
import { authAC, followSuccess, setCurrentPage, setIsFetching, setTotalUsersCount, setUsers, toggleIsFollowingProgress, unFollowSuccess } from "./ActionCreators"
import { AuthReducerActions } from "./AuthReducer"
import { ActionT } from "./redux-types"
import { UsersReducerActions } from "./UsersReducer"

//LoginThunk
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


//UsersThunk
export const requestUsersThunk = (page: number, pageSize: number): ActionT<UsersReducerActions> => async (dispatch) => {
	dispatch(setIsFetching(true))
	let data = await usersAPI.getUsers(page, pageSize)
	dispatch(setIsFetching(false))
	dispatch(setUsers(data.items))
	dispatch(setTotalUsersCount(data.totalCount))
	dispatch(setCurrentPage(page))
}



// export const follow = (userId:number) => {
// 	return async (dispatch) => {
// 		dispatch(toggleIsFollowingProgress(true, userId))
// 		let response = await usersAPI.follow(userId)
// 		if (response.data.resultCode === 0) {
// 			dispatch(followSuccess(userId))
// 		}
// 		dispatch(toggleIsFollowingProgress(false, userId))
// 	}
// }



// export const unFollow = (userId:number) => {
// 	return async (dispatch) => {
// 		dispatch(toggleIsFollowingProgress(true, userId))
// 		let response = await usersAPI.unFollow(userId)
// 		if (response.data.resultCode === 0) {
// 			dispatch(unFollowSuccess(userId))
// 		}
// 		dispatch(toggleIsFollowingProgress(false, userId))
// 	}
// }

