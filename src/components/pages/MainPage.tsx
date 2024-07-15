import { useEffect } from "react"
import { BioPage, ComplaintPage, FilterPage, HomePage, ProfilePage } from "."
import { useValidateQuery } from "../store/slices/bot.api"

export const MainPage = () => {
	const tg = window.Telegram.WebApp

	const { isLoading: loadUser, data: dataUser } = useValidateQuery(
		tg.initData
	)

	useEffect(() => {
		tg.expand()
		tg.ready()
		tg.setHeaderColor("#000000")
	}, [tg])

	return (
		<>
			<FilterPage />
			<HomePage />
			<ComplaintPage />
			<BioPage />
			<ProfilePage />
		</>
	)
}
