import {
	Transition,
	Dialog,
	TransitionChild,
	DialogPanel
} from "@headlessui/react"
import { Fragment } from "react/jsx-runtime"
import { useBotDispatch, useBotSelector } from "../store"
import {
	selectBan,
	selectFilter,
	showBan,
	showFilter
} from "../store/slices/botApp.slice"
import { Filter } from "../elements/Filter"
import { XMarkIcon } from "@heroicons/react/20/solid"

export const FilterPage = () => {
	const dispatch = useBotDispatch()
	const filter = useBotSelector(selectFilter)

	return (
		<>
			<Transition appear show={filter} as={Fragment}>
				<Dialog
					as='div'
					className='relative z-30'
					onClose={() => dispatch(showFilter(false))}
				>
					<div className='pointer-events-none fixed inset-x-0 bottom-0 flex h-[20%]'>
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
									className='absolute right-[28px] top-[-14px] font-medium text-white p-1 rounded-full bg-[#F34D71]'
									onClick={() => dispatch(showFilter(false))}
								>
									<XMarkIcon className='w-7 h-7' />
								</button>
								<button
									type='button'
									className='absolute right-[28px] top-[-14px] font-medium text-white p-1 rounded-full bg-[#F34D71]'
									onClick={() => dispatch(showFilter(false))}
								>
									<XMarkIcon className='w-7 h-7' />
								</button>
								<div className='flex flex-row justify-between p-4 bg-[#1c1f24] mt-4'>
									<p>Возраст поиска</p>
									<p>18-28</p>
								</div>
								<div className='flex flex-col items-center justify-start p-4 text-sm bg-[#1c1f24]'>
									<Filter />
									<button className='bg-[#F34D71] w-full p-2 rounded-lg mt-4'>
										Готово
									</button>
								</div>
							</DialogPanel>
						</TransitionChild>
					</div>
				</Dialog>
			</Transition>
		</>
	)
}
