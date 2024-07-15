import {
	Transition,
	Dialog,
	TransitionChild,
	DialogPanel
} from "@headlessui/react"
import { Fragment } from "react/jsx-runtime"
import { useBotDispatch, useBotSelector } from "../store"
import { selectBan, showBan } from "../store/slices/botApp.slice"
import { XMarkIcon } from "@heroicons/react/20/solid"

export const ComplaintPage = () => {
	const dispatch = useBotDispatch()
	const ban = useBotSelector(selectBan)

	const complaints = [
		{ id: "1", name: "Ненастоящий профиль или мошенник" },
		{ id: "2", name: "Этот пользователь что-то продает" },
		{ id: "3", name: "Обнаженность или непристойные материалы" },
		{ id: "4", name: "Пользователю нет 18 лет" },
		{ id: "5", name: "Оскорбительное или угрожающее поведение" },
		{ id: "6", name: "Другое" }
	]

	return (
		<>
			<Transition appear show={ban} as={Fragment}>
				<Dialog
					as='div'
					className='relative z-30'
					onClose={() => dispatch(showBan(false))}
				>
					<div className='pointer-events-none fixed inset-x-0 bottom-0 flex h-[60%]'>
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
									onClick={() => dispatch(showBan(false))}
								>
									<XMarkIcon className='w-7 h-7' />
								</button>
								<div className='flex flex-col items-center justify-start p-4 text-sm mt-4'>
									<ul>
										{complaints.map(complaint => (
											<li
												key={complaint.id}
												className='bg-[#D9D9D9] p-4 my-2 rounded-lg text-[#191919] text-center f'
											>
												{complaint.name}
											</li>
										))}
										<li
											onClick={() =>
												dispatch(showBan(false))
											}
											className='bg-[#F34D71] w-full p-2 rounded-lg mt-4 text-center'
										>
											Отмена
										</li>
									</ul>
								</div>
							</DialogPanel>
						</TransitionChild>
					</div>
				</Dialog>
			</Transition>
		</>
	)
}
