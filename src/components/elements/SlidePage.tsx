import {
	Transition,
	Dialog,
	TransitionChild,
	DialogPanel
} from "@headlessui/react"
import { Fragment } from "react/jsx-runtime"
import { XMarkIcon } from "@heroicons/react/20/solid"
import { useBotDispatch, useBotSelector } from "../store"
import { selectSlide, showSlide } from "../store/slices/botApp.slice"
import { useBackButton } from "../hooks/useBackButton"
import { FullScreen } from "./FullScreen"

export const SlidePage = () => {
	const dispatch = useBotDispatch()
	const slide = useBotSelector(selectSlide)

	useBackButton(slide.show, () =>
		dispatch(showSlide({ page: 0, show: false }))
	)

	return (
		<>
			<Transition appear show={slide.show} as={Fragment}>
				<Dialog
					as='div'
					className='relative z-30'
					onClose={() =>
						dispatch(showSlide({ show: false, page: 0 }))
					}
				>
					<div className='fixed inset-y-0 right-0 flex max-w-full'>
						<TransitionChild
							as={Fragment}
							enter='transform transition ease-in-out duration-300'
							enterFrom='translate-x-full opacity-5'
							enterTo='translate-x-0 opacity-100'
							leave='transform transition ease-in-out duration-300'
							leaveFrom='translate-x-0 opacity-100'
							leaveTo='translate-x-full opacity-5'
						>
							<DialogPanel
								id='bottomCoin'
								className='pointer-events-auto relative w-screen bg-tgBgColor'
							>
								<button
									type='button'
									className='absolute right-5 top-5 font-medium text-tgTextColor p-1 rounded-full bg-tgSecondaryBgColor'
									onClick={() =>
										dispatch(
											showSlide({ show: false, page: 0 })
										)
									}
								>
									<XMarkIcon className='w-5 h-5' />
								</button>
								<FullScreen style={"start"}>
									<p>SlidePage</p>
								</FullScreen>
							</DialogPanel>
						</TransitionChild>
					</div>
				</Dialog>
			</Transition>
		</>
	)
}
