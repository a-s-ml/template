import { Profile, Settings, Photo } from "../elements"

export const HomePage = () => {
	return (
		<div className='bg-[#191919] text-[#D9D9D9] flex flex-col items-center justify-start p-4 h-screen text-sm'>
			<div className='flex flex-row justify-between w-full py-4'>
				<Profile />
				<Settings />
			</div>
			<Photo />
		</div>
	)
}
