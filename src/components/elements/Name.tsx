import { MapPinIcon } from "@heroicons/react/24/outline"

export const Name = () => {
	return (
		<div className='absolute flex flex-col items-start w-full bottom-[20%] px-2'>
			<span className='text-[49px] font-medium py-4'>Алиса, 19</span>
			<div className='block flex-shrink-0'>
				<div className='flex items-center'>
					<div>
						<MapPinIcon className='w-4 h-4' />
					</div>
					<div className='ml-1'>
						<p className='text-[26px] font-light'>Москва</p>
					</div>
				</div>
			</div>
		</div>
	)
}
