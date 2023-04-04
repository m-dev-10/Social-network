import { ProfileReducerActions } from './ProfileReducer';
import { authAPI, contentAPI, usersAPI } from "../API/API"
import { authAC, followSuccess, getCaptchaUrlAC, initializedAC, saveAvatarAC, saveProfileAC, setCurrentPage, setIsFetching, setMyProfileAC, setStatusAC, setTotalUsersCount, setUsers, setUsersProfileAC, toggleIsFollowingProgress, unFollowSuccess, updateStatusAC } from "./ActionCreators"
import { AuthReducerActions } from "./AuthReducer"
import { ActionT } from "./redux-types"
import { UsersReducerActions } from "./UsersReducer"
import { appReducerActions } from './appReducer';

//LoginThunk
export const authThunk = (): ActionT<AuthReducerActions> => async (dispatch) => {
	let response = await authAPI.setAuth()
	if (response.data.resultCode === 0) {
		// let { id, login, email } = response.data.data
		let { id, email, login } = response.data.data
		console.log('thunk3');
		console.log('resposne', response);
		// console.log('id, login, email ', id, login, response);
		console.log('e', email, 'l', login);
		dispatch(authAC(id, email, login, true))
		dispatch(getProfileThunk(id, true))

	}
}
export const loginThunk = (login: string, password: string, rememberMe: boolean, captcha: any,): ActionT<AuthReducerActions> => async (dispatch) => {
	console.log('thunk1');
	let response = await authAPI.login(login, password, rememberMe, captcha)
	console.log('error');
	if (response.data.resultCode === 0) {
		// let { id, login, email } = response.data.data
		// let id = response.data.data.userId
		dispatch(authThunk())
	}
	else if (response.data.resultCode === 10) {
		dispatch(getCaptchaUrlTnunk())
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
export const getCaptchaUrlTnunk = (): ActionT<AuthReducerActions> => async (dispatch) => {
	let response = await authAPI.getCaptcha()
	const captchaUrl = response.data.url
	console.log(captchaUrl);
	dispatch(getCaptchaUrlAC(captchaUrl))
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



export const followThunk = (userId: number): ActionT<UsersReducerActions> => {
	return async (dispatch) => {
		dispatch(toggleIsFollowingProgress(true, userId))
		let response = await usersAPI.follow(userId)
		if (response.data.resultCode === 0) {
			dispatch(followSuccess(userId))
		}
		dispatch(toggleIsFollowingProgress(false, userId))
	}
}



export const unFollowThunk = (userId: number): ActionT<UsersReducerActions> => {
	return async (dispatch) => {
		dispatch(toggleIsFollowingProgress(true, userId))
		let response = await usersAPI.unFollow(userId)
		if (response.data.resultCode === 0) {
			dispatch(unFollowSuccess(userId))
		}
		dispatch(toggleIsFollowingProgress(false, userId))
	}
}

// ProfileThunk

export const getProfileThunk = (userId: number, myProfile: boolean = false): ActionT<ProfileReducerActions> => {
	return async (dispatch) => {
		let data = await contentAPI.getProfile(userId)
		console.log('saveProfile4');
		dispatch(setUsersProfileAC(data))
		if (myProfile) {
			dispatch(setMyProfileAC(data))
		}
	}
}



export const getStatusThunk = (userId: number): ActionT<ProfileReducerActions> => {
	return async (dispatch) => {
		let response = await contentAPI.getStatus(userId)
		dispatch(setStatusAC(response.data))
		console.log('get thunk');
	}
}
export const updateStatusThunk = (status: string): ActionT<ProfileReducerActions> => {
	return async (dispatch) => {
		let response = await contentAPI.updateStatus(status)
		if (response.data.resultCode === 0) {
			dispatch(setStatusAC(status))
		}
	}
}
export const saveAvatarThunk = (photoFile: string, id: number): ActionT<ProfileReducerActions> => {
	return async (dispatch) => {
		let response = await contentAPI.savePhoto(photoFile)
		if (response.data.resultCode === 0) {
			console.log('ava5');
			await dispatch(saveAvatarAC(response.data.data.photos))
			console.log('55');
			dispatch(getProfileThunk(id, true))
		}
	}
}
export const saveProfileThunk = (profile: any, userId: any): ActionT<ProfileReducerActions> => {
	return async (dispatch) => {
		let response = await contentAPI.saveProfile(profile)
		console.log('data4')
		if (response.data.resultCode === 0) {
			dispatch(saveProfileAC(profile))
		}
	}
}

//app

export const initializeAppThunk = (): ActionT<appReducerActions> => {
	return async (dispatch) => {
		let promise = dispatch(authThunk())
		Promise.all([promise]).then(() => { dispatch(initializedAC()) })
	}
}