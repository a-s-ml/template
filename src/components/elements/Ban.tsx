import { useBotDispatch } from "../store"
import { showBan } from "../store/slices/botApp.slice"
import { HandRaisedIcon } from "@heroicons/react/20/solid"

export const Ban = () => {
	const dispatch = useBotDispatch()
	return (
		<div
			className='absolute pt-3 right-4'
			onClick={() => dispatch(showBan(true))}
		>
			<HandRaisedIcon className='w-4 h-4' />
		</div>
	)
}
