import { SetStateAction, useState } from "react"
import { promo } from "../const"
import { classNames } from "../function"
import { useMainButton } from "../hooks/useMainButton"
import { useBotDispatch } from "../store"
import { showModal } from "../store/slices/botApp.slice"

export const PromoPage = () => {
	const dispatch = useBotDispatch()
	const [currentIndex, setCurrentIndex] = useState(0)

	const nextSlide = () => {
		const isLastSlide = currentIndex === promo.length - 1
		const newIndex = isLastSlide ? 0 : currentIndex + 1
		setCurrentIndex(newIndex)
	}

	const goToSlide = (slideIndex: SetStateAction<number>) => {
		setCurrentIndex(slideIndex)
	}

	useMainButton(
		currentIndex <= 2 ? true : false,
		"Далее",
		currentIndex < 2
			? nextSlide
			: () => dispatch(showModal({ page: "", show: false }))
	)

	return (
		<div className='flex relative items-start justify-center w-full h-full'>
			<nav className='absolute p-4 w-full'>
				<div className='flex flex-row space-x-2 items-start justify-center'>
					{promo.map((slide, slideIndex) => (
						<li
							key={slide.id}
							onClick={() => goToSlide(slideIndex)}
							className={classNames(
								promo[slideIndex].id === currentIndex + 1
									? "bg-tgAccentTextColor"
									: "bg-tgTextColor",
								"cursor-pointer flex flex-col w-1/3 h-[4px] rounded-lg"
							)}
						></li>
					))}
				</div>
			</nav>
			<div className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>
				{promo
					.filter(item => item.id - 1 === currentIndex)
					.map(item => (
						<div key={item.id}>
							<item.component />
						</div>
					))}
			</div>
		</div>
	)
}
