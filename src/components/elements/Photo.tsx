import img from "../img/girl.png"
import img2 from "../img/girl2.jpg"
import img3 from "../img/girl3.jpg"
import { Buttons, Name, Ban } from "../elements"
import { SetStateAction, useState } from "react"
import { useBotDispatch } from "../store"
import { HandRaisedIcon } from "@heroicons/react/20/solid"
import { showBan } from "../store/slices/botApp.slice"

export const Photo = () => {
	const dispatch = useBotDispatch()
	const slides = [
		{
			id: 1,
			url: img
		},
		{
			id: 2,
			url: img2
		},
		{
			id: 3,
			url: img3
		}
	]

	const [currentIndex, setCurrentIndex] = useState(0)

	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
		setCurrentIndex(newIndex)
	}

	const nextSlide = () => {
		const isLastSlide = currentIndex === slides.length - 1
		const newIndex = isLastSlide ? 0 : currentIndex + 1
		setCurrentIndex(newIndex)
	}

	const goToSlide = (slideIndex: SetStateAction<number>) => {
		setCurrentIndex(slideIndex)
	}

	return (
		<div className='flex relative items-start justify-center w-full h-full rounded-xl'>
			<nav className='absolute pt-4 mx-auto'>
				<ol className='flex flex-row space-x-2 items-start justify-center'>
					{slides.map((slide, slideIndex) => (
						<li
							key={slideIndex}
							onClick={() => goToSlide(slideIndex)}
							className='text-2xl cursor-pointer'
						>
							{slides[slideIndex].id === currentIndex + 1 ? (
								<button className='flex flex-col w-10 h-[6px] bg-[#D9D9D9] rounded-xl'></button>
							) : (
								<button className='flex flex-col w-5 h-[6px] bg-[#D9D9D9] rounded-xl opacity-40'></button>
							)}
						</li>
					))}
				</ol>
			</nav>
			<div
				style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
				onClick={nextSlide}
				className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
			></div>
			<div
				className='absolute pt-3 right-4'
				onClick={() => dispatch(showBan(true))}
			>
				<HandRaisedIcon className='w-4 h-4' />
			</div>
			<Name />
			<Buttons />
		</div>
	)
}
