import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from ".."

export interface IModal {
	show: boolean
	page: string
}

export interface IAlert {
	show: boolean
	text: string
}

export interface ISlide {
	show: boolean
	page: number
}

export interface groupAppState {
	alert: IAlert
	modal: IModal
	slide: ISlide
	balance: number
}

const initialState: groupAppState = {
	alert: {
		show: false,
		text: ""
	},
	modal: {
		show: false,
		page: ""
	},
	slide: {
		show: false,
		page: 0
	},
	balance: 0
}

export const botAppSlice = createSlice({
	name: "botApp",
	initialState,
	reducers: {
		showAlert: (state, action: PayloadAction<IAlert>) => {
			state.alert.show = action.payload.show
			state.alert.text = action.payload.text
		},
		showSlide: (state, action: PayloadAction<ISlide>) => {
			state.slide.show = action.payload.show
			state.slide.page = action.payload.page
		},
		showModal: (state, action: PayloadAction<IModal>) => {
			state.modal.show = action.payload.show
			state.modal.page = action.payload.page
		}
	}
})

export const { showModal, showSlide, showAlert } = botAppSlice.actions

export const selectAlert = (state: RootState) => state.botApp.alert
export const selectSlide = (state: RootState) => state.botApp.slide
export const selectModal = (state: RootState) => state.botApp.modal
export const selectBalance = (state: RootState) => state.botApp.balance

export default botAppSlice.reducer
