export interface IUser {
	id: number
	name: string
	status: string
	photos: {
		small: string
		large: string
	}
	followed: boolean
}