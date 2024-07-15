import { AdjustmentsHorizontalIcon } from "@heroicons/react/20/solid"
import { showFilter } from "../store/slices/botApp.slice"
import { useBotDispatch } from "../store"

export const Settings = () => {
	const dispatch = useBotDispatch()
	return (
		<button
			className='block flex-shrink-0'
			onClick={() => dispatch(showFilter(true))}
		>
			<AdjustmentsHorizontalIcon className='w-6 h-5' />
		</button>
	)
}
