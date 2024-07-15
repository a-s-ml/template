import {
	Transition,
	Dialog,
	TransitionChild,
	DialogPanel
} from "@headlessui/react"
import { Fragment } from "react/jsx-runtime"
import { useBotDispatch, useBotSelector } from "../store"
import { selectBio, showBio } from "../store/slices/botApp.slice"
import { MapPinIcon, XMarkIcon } from "@heroicons/react/20/solid"

export const BioPage = () => {
	const dispatch = useBotDispatch()
	const bio = useBotSelector(selectBio)

	return (
		<>
			<Transition appear show={bio} as={Fragment}>
				<Dialog
					as='div'
					className='relative z-30'
					onClose={() => dispatch(showBio(false))}
				>
					<div className='pointer-events-none fixed inset-x-0 bottom-0 flex h-[40%]'>
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
								className='pointer-events-auto relative w-screen bg-[#1c1f24] text-white rounded-xl'
							>
								<button
									type='button'
									className='absolute right-[28px] top-[-14px] font-medium text-white p-1 rounded-full bg-[#F34D71]'
									onClick={() => dispatch(showBio(false))}
								>
									<XMarkIcon className='w-7 h-7' />
								</button>
								<div className='m-4 border-b-2 border-[#F34D71]'>
									<div className='text-left py-4'>
										<span className='text-[28px] font-medium py-4'>
											Алиса, 19
										</span>
										<div className='block flex-shrink-0'>
											<div className='flex items-center'>
												<div>
													<MapPinIcon className='w-4 h-4' />
												</div>
												<div className='ml-1'>
													<p className='text-[20px] font-light'>
														Москва
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className='p-4'>
									<p>
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore
										adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magna
									</p>
								</div>
							</DialogPanel>
						</TransitionChild>
					</div>
				</Dialog>
			</Transition>
		</>
	)
}
