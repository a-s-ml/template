import {
	ArrowUturnLeftIcon,
	HeartIcon,
	IdentificationIcon,
	XMarkIcon
} from "@heroicons/react/24/outline"
import { showBio } from "../store/slices/botApp.slice"
import { useBotDispatch } from "../store"

export const Buttons = () => {
	const dispatch = useBotDispatch()
	return (
		<div className='absolute bottom-0 flex flex-col items-center'>
			<div className='isolate inline-flex items-end space-x-3'>
				<button
					type='button'
					className='relative inline-flex items-center justify-center rounded-full bg-[#D9D9D9] px-2 py-2 text-[#707579] h-14 w-14'
				>
					<span className='sr-only'>Previous</span>
					<ArrowUturnLeftIcon
						className='h-6 w-6'
						aria-hidden='true'
					/>
				</button>
				<button
					type='button'
					className='relative inline-flex items-center justify-center rounded-full bg-[#D9D9D9] px-2 py-2 text-[#707579] h-20 w-20'
				>
					<span className='sr-only'>Next</span>
					<XMarkIcon
						className='text-[#0C82FE] h-8 w-8'
						aria-hidden='true'
					/>
				</button>
				<button
					type='button'
					className='relative inline-flex items-center justify-center rounded-full bg-[#D9D9D9] px-2 py-2 text-[#707579] h-20 w-20'
				>
					<span className='sr-only'>Next</span>
					<HeartIcon
						className='text-[#F34D71] h-8 w-8'
						aria-hidden='true'
					/>
				</button>
				<button
					type='button'
					onClick={() => dispatch(showBio(true))}
					className='relative inline-flex items-center justify-center rounded-full bg-[#D9D9D9] px-2 py-2 text-[#707579] h-14 w-14'
				>
					<span className='sr-only'>Next</span>
					<IdentificationIcon
						className='h-5 w-5'
						aria-hidden='true'
					/>
				</button>
			</div>
		</div>
	)
}
