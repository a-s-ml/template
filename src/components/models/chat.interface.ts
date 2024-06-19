export interface IUser {
	id: number
	first_name?: string
	last_name?: string
	username?: string
	language_code?: string
	allows_write_to_pm?: boolean
}

export interface IUserDataReq {
	auth_date: number
	query_id: string
	user: IUser
}

export interface IValidate {
	validate: boolean
	UserData: IUserDataReq
}
