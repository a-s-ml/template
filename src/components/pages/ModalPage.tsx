import {
	Dialog,
	DialogPanel,
	Transition,
	TransitionChild
} from "@headlessui/react"
import { selectModal, showModal } from "../store/slices/botApp.slice"
import { useBotDispatch, useBotSelector } from "../store"
import { TemplatePage } from "../pages"

export const ModalPage = () => {
	const dispatch = useBotDispatch()
	const modal = useBotSelector(selectModal)

	return (
		<Transition appear show={modal.show}>
			<Dialog
				as='div'
				className='relative z-30'
				onClose={() => dispatch(showModal({ show: true, page: "" }))}
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
								<TemplatePage />
							</DialogPanel>
						</TransitionChild>
					</div>
				</div>
			</Dialog>
		</Transition>
	)
}
