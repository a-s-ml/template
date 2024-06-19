import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react"
import { IValidate } from "../../models/chat.interface"

const staggeredBaseQuery = retry(
	fetchBaseQuery({ baseUrl: "https://api80q.ru/hamster/" }),
	{ maxRetries: 1 }
)

export const botApi = createApi({
	reducerPath: "botApi",
	refetchOnFocus: true,
	baseQuery: staggeredBaseQuery,
	tagTypes: ["Validate"],
	endpoints: build => ({
		validate: build.query<IValidate, string>({
			query: (initData: string) => ({
				url: `chat/validateUser/${initData}`
			}),
			providesTags: ["Validate"]
		})
	})
})

export const { useValidateQuery } = botApi
