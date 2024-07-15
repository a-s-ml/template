import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from ".."


export interface groupAppState {
	ban: boolean
	bio: boolean
	filter: boolean
	profile: boolean
}

const initialState: groupAppState = {
	ban: false,
	bio: false,
	filter: false,
	profile: false
}

export const botAppSlice = createSlice({
	name: "botApp",
	initialState,
	reducers: {
		showBan: (state, action: PayloadAction<boolean>) => {
			state.ban = action.payload
		},
		showBio: (state, action: PayloadAction<boolean>) => {
			state.bio = action.payload
		},
		showProfile: (state, action: PayloadAction<boolean>) => {
			state.profile = action.payload
		},
		showFilter: (state, action: PayloadAction<boolean>) => {
			state.filter = action.payload
		},
	}
})

export const { showBan, showFilter, showBio, showProfile } = botAppSlice.actions

export const selectBan = (state: RootState) => state.botApp.ban
export const selectBio = (state: RootState) => state.botApp.bio
export const selectProfile = (state: RootState) => state.botApp.profile
export const selectFilter = (state: RootState) => state.botApp.filter

export default botAppSlice.reducer
