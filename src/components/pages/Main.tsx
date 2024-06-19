import { useEffect } from "react"
import { ErrorPage, ModalPage, SlidePage, Nav, Preloader } from "../pages"
import { useValidateQuery } from "../store/slices/bot.api"

export const Main = () => {
	const tg = window.Telegram.WebApp

	const { isLoading: loadUser, data: dataUser } = useValidateQuery(
		tg.initData
	)

	useEffect(() => {
		tg.expand()
		tg.ready()
		tg.setHeaderColor("#000000")
		tg.setHeaderColor("#000000")
	}, [tg])

	return (
		<>
			{loadUser && <Preloader />}
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
