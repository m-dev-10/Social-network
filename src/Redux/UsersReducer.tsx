import { IUser } from "../Types/IUser"
import { followAC, setCurrentPageAC, setIsFetchingAC, setTotalUsersCountAC, setUsersAC, toggleIsFollowingProgressAC, unfollowAC } from "./ActionCreators"
import {
	FOLLOW,
	SET_CURRENT_PAGE,
	SET_TOTAL_USERS_COUNT,
	SET_USERS,
	TOGGLE_IS_FETCHING,
	TOGGLE_IS_FOLLOWING_PROGRESS,
	UNFOLLOW
} from "./ActionTypes"



let initialState = {
	users: [] as Array<IUser>,
	pageSize: 10,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
	followingInProgress: [] as Array<number>,
	portionSize: 0
}


export type StateUsersReducer = typeof initialState


export type UsersReducerActions = setUsersAC | followAC | unfollowAC | setTotalUsersCountAC | setCurrentPageAC | setIsFetchingAC | toggleIsFollowingProgressAC



const UsersReducer = (State = initialState, action: UsersReducerActions): StateUsersReducer => {
	switch (action.type) {
		case FOLLOW:
			return {
				...State,
				users: State.users.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: true }
					}
					return u
				})
			}
		case UNFOLLOW:
			return {
				...State,
				users: State.users.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: false }
					}
					return u
				})
			}
		case SET_USERS:
			return {
				...State,
				users: action.users
			}
		case SET_CURRENT_PAGE: {
			return {
				...State, currentPage: action.currentPage
			}
		}
		case SET_TOTAL_USERS_COUNT: {
			return {
				...State, totalUsersCount: action.count
			}
		}
		case TOGGLE_IS_FETCHING: {
			return {
				...State, isFetching: action.isFetching
			}
		}
		case TOGGLE_IS_FOLLOWING_PROGRESS: {
			return {
				// ...State,
				// followingInProgress: action.isFetching
				// 	? [...State.followingInProgress, action.userId]
				// 	: [State.followingInProgress.filter(id => id != action.userId)]
				...State,
				followingInProgress: action.isFetching
					? [...State.followingInProgress, action.userId]
					: [...State.followingInProgress.filter(id => id !== action.userId)]
			}
		}
		default:
			return State
	}
}



// export const followSuccess = (userId) => {
// 	return { type: FOLLOW, userId }
// }

// export const unFollowSuccess = (userId) => {
// 	return { type: UNFOLLOW, userId }
// }

// export const setUsers = (users) => {
// 	return { type: SET_USERS, users }
// }

// export const setCurrentPage = (currentPage) => {
// 	return { type: SET_CURRENT_PAGE, currentPage: currentPage }
// }
// export const setTotalUsersCount = (totalUsersCount) => {
// 	return { type: SET_TOTAL_USERS_COUNT, count: totalUsersCount }
// }
// export const setIsFetching = (isFetching) => {
// 	return { type: TOGGLE_IS_FETCHING, isFetching }
// }
// export const toggleIsFollowingProgress = (isFetching, userId) => {
// 	return { type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId }
// }



// export const requestUsers = (page, pageSize) => {
// 	return async (dispatch) => {
// 		dispatch(setIsFetching(true))
// 		let data = await usersAPI.getUsers(page, pageSize)
// 		dispatch(setIsFetching(false))
// 		dispatch(setUsers(data.items))
// 		dispatch(setTotalUsersCount(data.totalCount))
// 		dispatch(setCurrentPage(page))
// 	}
// }


// export const unFollow = (userId) => {
// 	return async (dispatch) => {
// 		dispatch(toggleIsFollowingProgress(true, userId))
// 		let response = await usersAPI.unFollow(userId)
// 		if (response.data.resultCode === 0) {
// 			dispatch(unFollowSuccess(userId))
// 		}
// 		dispatch(toggleIsFollowingProgress(false, userId))
// 	}
// }



// export const follow = (userId) => {
// 	return async (dispatch) => {
// 		dispatch(toggleIsFollowingProgress(true, userId))
// 		let response = await usersAPI.follow(userId)
// 		if (response.data.resultCode === 0) {
// 			dispatch(followSuccess(userId))
// 		}
// 		dispatch(toggleIsFollowingProgress(false, userId))
// 	}
// }




export default UsersReducer


