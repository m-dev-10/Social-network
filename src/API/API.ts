import axios from 'axios';
// import { setAuthUsersData } from '../Redux/AuthReducer';

const instance = axios.create({
	withCredentials: true,
	baseURL: `https://social-network.samuraijs.com/api/1.0/`,
	headers: {
		"API-KEY": "294c44e2-b1fb-4280-b696-068babcd3042"
	}
})


//UsersPage
export const usersAPI = {
	getUsers(currentPage: number, pageSize: number) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`,
		).then(response => {
			return response.data
		})
	},
	follow(userId: number) {
		return instance.post(`follow/${userId}`,
		)

	},
	unFollow(userId: number) {
		return instance.delete(`follow/${userId}`,
		)
	}
}

// export const contentAPI = {
// 	getContent(userId) {
// 		return instance.get(`profile/` + userId)
// 			.then(response => {
// 				return response.data
// 			})
// 	},
// 	getStatus(userId) {
// 		return instance.get(`profile/status/` + userId)
// 		// .then(response => {
// 		// 	return response.data
// 		// })
// 	},
// 	updateStatus(status) {
// 		return instance.put(`profile/status/`, { status: status })
// 		// .then(response => {
// 		// 	return response.data
// 		// })
// 	},
// 	savePhoto(photoFile) {
// 		let formData = new FormData()
// 		formData.append("image", photoFile)
// 		return instance.put(`profile/photo/`, formData, {
// 			headers: {
// 				'Content-Type': 'multipart/form-data'
// 			}
// 		})
// 		// .then(response => {
// 		// 	return response.data
// 		// })
// 	},
// 	saveProfile(profile) {
// 		console.log('put', profile);
// 		return instance.put(`profile`, profile)
// 	}

// 	// .then(response => {
// 	// 	return response.data
// 	// })
// }



//LoginForm
export const authAPI = {
	setAuth() {
		return instance.get(`auth/me`)
	},
	login(email: string, password: string, rememberMe = false, captcha = null) {
		return instance.post(`auth/login`, { email, password, rememberMe, captcha })
	},
	logout() {
		return instance.delete(`auth/login`)
	},
	// getCaptcha() {
	// 	return instance.get(`security/get-captcha-url`)
	// }
}


// export const securityAPI = {
// 	getCaptcha() {
// 		return instance.get(`security/get-captcha-url`)
// 	}
// }