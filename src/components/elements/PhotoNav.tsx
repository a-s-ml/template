import img from "../img/Rectangle 1.png"

const images = [
	{ id: "1", status: "complete" },
	{ id: "2", status: "complete" },
	{ id: "3", status: "current" }
]

export const PhotoNav = () => {
	return (
		<nav className='absolute flex pt-4 w-full items-start justify-center'>
			<ol className='flex flex-row space-x-2 items-start justify-center'>
				{images.map(img => (
					<li key={img.id} className='flex-1'>
						{img.status === "current" ? (
							<button className='flex flex-col w-10 h-[6px] bg-[#D9D9D9] rounded-xl'></button>
						) : (
							<button className='flex flex-col w-5 h-[6px] bg-[#D9D9D9] rounded-xl opacity-40'></button>
						)}
					</li>
				))}
			</ol>
		</nav>
	)
}
