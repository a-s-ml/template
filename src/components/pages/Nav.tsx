import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/react"
import { Fragment } from "react/jsx-runtime"
import { useEffect } from "react"
import { useBotDispatch, useBotSelector } from "../store"
import { selectModal, showModal } from "../store/slices/botApp.slice"
import { navigate } from "../const"
import { classNames } from "../function"

export const Nav = () => {
	const tg = window.Telegram.WebApp
	const dispatch = useBotDispatch()
	const modal = useBotSelector(selectModal)

	useEffect(() => {
		if (!modal.show) {
			tg.BackButton.hide()
		} else {
			tg.BackButton.show()
			tg.onEvent("backButtonClicked", () =>
				dispatch(showModal({ show: false, page: "" }))
			)
		}
	}, [modal])

	return (
		<>
			<TabGroup>
				<div className='z-10 fixed bottom-0 w-screen px-4'>
					<div className='p-1 rounded-xl bg-[#282b30] border border-1 border-[#1c1f24]'>
						<TabList className='flex justify-items-center justify-between'>
							{navigate.map(nav => (
								<Tab
									key={nav.name}
									onClick={() =>
										tg.HapticFeedback.notificationOccurred(
											"success"
										)
									}
									className={({ selected }) =>
										classNames(
											selected
												? "bg-[#1c1f24] text-white"
												: "",
											"text-gray-400 text-center text-xs p-2 rounded-2xl w-1/5 flex-col justify-items-center items-center outline-none"
										)
									}
								>
									<div className='flow-root'>
										<nav.icon
											className='h-6 w-6 mx-auto mb-1'
											aria-hidden='true'
										/>
									</div>
									{nav.name}
								</Tab>
							))}
						</TabList>
					</div>
				</div>

				<TabPanels as={Fragment}>
					{navigate.map(nav => (
						<TabPanel key={nav.name}>
							<nav.component />
						</TabPanel>
					))}
				</TabPanels>
			</TabGroup>
		</>
	)
}
