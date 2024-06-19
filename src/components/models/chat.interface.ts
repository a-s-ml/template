export type User = {
	id: number
	first_name?: string
	last_name?: string
	username?: string
	language_code?: string
	allows_write_to_pm?: boolean
}

export type UserDataReq = {
	auth_date: number
	query_id: string
	user: User
}

export type IValidate = {
	validate: boolean
	UserData: UserDataReq
}
