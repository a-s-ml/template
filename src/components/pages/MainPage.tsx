import { useEffect } from "react"
import { ErrorPage } from "."
import { useValidateQuery } from "../store/slices/bot.api"
import { FullScreen, ModalPage, Nav, Preloader, SlidePage } from "../elements"

export const MainPage = () => {
	const tg = window.Telegram.WebApp

	const { isLoading: loadUser, data: dataUser } = useValidateQuery(
		tg.initData
	)

	useEffect(() => {
		tg.expand()
		tg.ready()
		tg.setHeaderColor("#17212b")
	}, [tg])

	return (
		<>
			{loadUser && (
				<>
					<FullScreen style={"center"}>
						<Preloader />
					</FullScreen>
				</>
			)}
			<>
				{dataUser ? (
					<>
						<Nav />
						<ModalPage />
						<SlidePage />
					</>
				) : (
					<ErrorPage />
				)}
			</>
		</>
	)
}
