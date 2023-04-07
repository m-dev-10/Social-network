import axios from 'axios';

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

export const contentAPI = {
	getProfile(userId: number) {
		return instance.get(`profile/` + userId)
			.then(response => {
				return response.data
			})
	},
	getStatus(userId: number) {
		return instance.get(`profile/status/` + userId)
			.then(response => {
				return response
			})
	},
	updateStatus(status: string) {
		return instance.put(`profile/status/`, { status: status })
			.then(response => {
				return response
			})
	},
	savePhoto(photoFile: any) {
		let formData = new FormData()
		formData.append("image", photoFile)
		return instance.put(`profile/photo`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
	},
	saveProfile(profile: any) {
		return instance.put(`profile`, profile)
	}
}

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
	getCaptcha() {
		return instance.get(`security/get-captcha-url`)
	}
}

