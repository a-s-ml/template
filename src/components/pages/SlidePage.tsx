import {
	Transition,
	Dialog,
	TransitionChild,
	DialogPanel
} from "@headlessui/react"
import { Fragment } from "react/jsx-runtime"
import { XMarkIcon } from "@heroicons/react/20/solid"
import { TemplatePage } from "./TemplatePage"
import { useBotDispatch, useBotSelector } from "../store"
import { selectSlide, showSlide } from "../store/slices/botApp.slice"

export const SlidePage = () => {
	const dispatch = useBotDispatch()
	const slide = useBotSelector(selectSlide)

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
					<div className='pointer-events-none fixed inset-x-0 bottom-0 flex h-[65%]'>
						<TransitionChild
							as={Fragment}
							enter='transform transition ease-in-out duration-300'
							enterFrom='translate-y-full opacity-100'
							enterTo='translate-y-0 opacity-100'
							leave='transform transition ease-in-out duration-300'
							leaveFrom='translate-y-0 opacity-100'
							leaveTo='translate-y-full opacity-100'
						>
							<DialogPanel
								id='bottomCoin'
								className='pointer-events-auto relative w-screen bg-[#1c1f24] text-white'
							>
								<button
									type='button'
									className='absolute right-5 top-5 font-medium text-black p-1 rounded-full bg-[#282b30]'
									onClick={() =>
										dispatch(
											showSlide({ show: false, page: 0 })
										)
									}
								>
									<XMarkIcon className='w-5 h-5' />
								</button>
								<TemplatePage />
							</DialogPanel>
						</TransitionChild>
					</div>
				</Dialog>
			</Transition>
		</>
	)
}
