import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import { botApi } from "./slices/bot.api"
import botAppSlice from "./slices/botApp.slice"

export const store = configureStore({
	reducer: {
		[botApi.reducerPath]: botApi.reducer,
		botApp: botAppSlice
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(botApi.middleware)
})

export type BotDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const useBotDispatch = () => useDispatch<BotDispatch>()
export const useBotSelector: TypedUseSelectorHook<RootState> = useSelector
