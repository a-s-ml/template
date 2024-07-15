import {
	Dialog,
	DialogPanel,
	Transition,
	TransitionChild
} from "@headlessui/react"
import { useBotDispatch, useBotSelector } from "../store"
import { selectProfile, showProfile } from "../store/slices/botApp.slice"
import { ProfileForm } from "../elements"
import { XMarkIcon } from "@heroicons/react/20/solid"

export const ProfilePage = () => {
	const dispatch = useBotDispatch()
	const profile = useBotSelector(selectProfile)

	return (
		<Transition appear show={profile}>
			<Dialog
				as='div'
				className='relative z-30'
				onClose={() => dispatch(showProfile(false))}
			>
				<div className='fixed inset-0 z-10 w-screen h-screen'>
					<div className='flex w-screen h-screen items-center justify-center'>
						<TransitionChild
							enter='ease-out duration-100'
							enterFrom='opacity-0 transform-[scale(95%)]'
							enterTo='opacity-100 transform-[scale(100%)]'
							leave='ease-in duration-100'
							leaveFrom='opacity-100 transform-[scale(100%)]'
							leaveTo='opacity-0 transform-[scale(95%)]'
						>
							<DialogPanel className='w-screen h-screen bg-black text-white'>
								<button
									type='button'
									className='absolute right-[28px] top-[-14px] font-medium text-white p-1 rounded-full bg-[#F34D71]'
									onClick={() => dispatch(showProfile(false))}
								>
									<XMarkIcon className='w-7 h-7' />
								</button>
								<div className='m-4 border-b-2 border-[#F34D71] '>
									<div className='text-center py-4'>
										<span className='text-[16px] font-medium py-4'>
											Моя анкета
										</span>
									</div>
								</div>
								<ProfileForm />
							</DialogPanel>
						</TransitionChild>
					</div>
				</div>
			</Dialog>
		</Transition>
	)
}
