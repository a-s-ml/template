import img from "../img/profile.png"
import { useBotDispatch } from "../store"
import { showProfile } from "../store/slices/botApp.slice"

export const Profile = () => {
	const dispatch = useBotDispatch()
	return (
		<button
			className='block flex-shrink-0 px-2'
			onClick={() => dispatch(showProfile(true))}
		>
			<div className='flex items-center'>
				<div>
					<img
						className='inline-block h-10 w-10 rounded-full'
						src={img}
						alt=''
					/>
				</div>
				<div className='ml-3'>
					<p>Михаил З.</p>
				</div>
			</div>
		</button>
	)
}
