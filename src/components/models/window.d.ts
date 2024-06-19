declare global {
	interface Window {
		Telegram: {
			WebApp: ITelegramWebApp
		}
	}
}

type BaseWebAppEventHandlerFunction<
	E extends string = string,
	C extends Function = () => void
> = (eventType: E, eventHandler: C) => void

type WebAppEventHandlerFunction =
	| BaseWebAppEventHandlerFunction
	| BaseWebAppEventHandlerFunction<"themeChanged">
	| BaseWebAppEventHandlerFunction<
			"viewportChanged",
			(isStateStable: boolean) => void
	  >
	| BaseWebAppEventHandlerFunction<"backButtonClicked">
	| BaseWebAppEventHandlerFunction<"mainButtonClicked">

export interface ITelegramWebAppUser {
	id: number
	is_bot: boolean
	first_name: string
	last_name?: string
	username?: string
	language_code?: string
	photo_url?: string
}

export interface ITelegramWebAppInitData {
	query_id?: string
	user?: ITelegramWebAppUser
	receiver?: ITelegramWebAppUser
	start_param?: string
	auth_date: number
	hash: string
}

interface IMainButtonParams {
	text: string
	color: string
	text_color: string
	is_active: boolean
	is_visible: boolean
}

export interface IMainButton {
	text: string
	color: string
	textColor: string
	isVisible: string
	isActive: boolean
	isProgressVisible: boolean
	setText: (text: string) => void
	onClick: (callback: () => void) => void
	offClick: (callback: () => void) => void
	show: () => void
	hide: () => void
	disable: () => void
	showProgress: (leaveActive: boolean) => void
	hideProgress: () => void
	setParams: (params: Partial<IMainButtonParams>) => void
}

export interface IBackButton {
	isVisible: boolean
	onClick: (callback: () => void) => void
	offClick: (callback: () => void) => void
	show: () => void
	hide: () => void
}

export interface IHapticFeedback {
	impactOccurred: (style: string) => void
	notificationOccurred: (type: string) => void
	selectionChanged: () => void
}

export interface ISettingsButton {
	onClick: (callback: () => void) => void
	offClick: (callback: () => void) => void
	show: () => void
	hide: () => void
}

export interface ITelegramWebApp {
	initData: string
	initDataUnsafe: ITelegramWebAppInitData
	colorScheme: "light" | "dark"
	viewportHeight: number
	viewportStableHeight: number
	setHeaderColor: (data: string) => void
	setBackgroundColor: (data: string) => void
	MainButton: IMainButton
	BackButton: IBackButton
	SettingsButton: ISettingsButton
	HapticFeedback: IHapticFeedback
	onEvent: (eventType: string, callback) => void
	offEvent: (eventType: string, callback) => void
	sendData: (data: string) => void
	ready: () => void
	expand: () => void
	close: () => void
	openTelegramLink: (url: string) => void
	switchInlineQuery: (query: string, type: Array<string>) => void
	showConfirm: (text: string, callback) => void
	showAlert: (text: string, callback) => void
	showPopup: (text: string, callback?) => void
	platform: string
	version: string
}
