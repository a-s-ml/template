import {
	Label,
	Radio,
	RadioGroup,
	RadioGroupLabel,
	RadioGroupOption
} from "@headlessui/react"
import { CheckCircleIcon } from "@heroicons/react/20/solid"
import classNames from "classnames"
import { useState } from "react"

export const ProfileForm = () => {
	const genders = [
		{ id: 1, title: "Мужской" },
		{ id: 2, title: "Женский" }
	]
	const finds = [
		{ id: 1, title: "Женщины" },
		{ id: 2, title: "Мужчины" },
		{ id: 3, title: "Все" }
	]

	const [selectedGender, setSelectedGender] = useState(genders[0])
	const [selectedFind, setSelectedFind] = useState(finds[0])

	return (
		<form className='bg-[#191919] text-[#D9D9D9] flex flex-col items-center justify-start p-4 h-screen text-sm'>
			<div className='w-full'>
				<div className='mt-4'>
					<input
						type='text'
						id='first-name'
						autoComplete='given-name'
						placeholder='Имя'
						className='block w-full rounded-md border-0 py-1.5 text-gray-900 placeholder:text-[#707579] placeholder:px-2'
					/>
				</div>
				<div className='mt-4'>
					<input
						type='text'
						id='first-name'
						autoComplete='given-name'
						placeholder='Обо мне'
						className='block w-full rounded-md border-0 py-1.5 text-gray-900 placeholder:text-[#707579] placeholder:px-2'
					/>
					<label
						htmlFor='first-name'
						className='block text-[12px] font-normal text-white pt-2'
					>
						Например: Дизайнер из Дубаи. Люблю серфинг и котиков :
						Макс.: 240 символов
					</label>
				</div>
				<div className='mt-4'>
					<input
						type='text'
						id='first-name'
						autoComplete='given-name'
						placeholder='Дата рождения (ДД.ММ.ГГ)'
						className='block w-full rounded-md border-0 py-1.5 text-gray-900 placeholder:text-[#707579] placeholder:px-2'
					/>
				</div>
				<div className='mt-4'>
					<input
						type='text'
						id='first-name'
						autoComplete='given-name'
						placeholder='Город'
						className='block w-full rounded-md border-0 py-1.5 text-gray-900 placeholder:text-[#707579] placeholder:px-2'
					/>
				</div>
				<div className='mt-4'>
					<label
						htmlFor='first-name'
						className='block text-[12px] font-normal text-white'
					>
						Пол
					</label>
					<RadioGroup
						value={selectedGender}
						onChange={setSelectedGender}
					>
						<div className='mt-4 grid grid-cols-2 gap-x-2'>
							{genders.map(gender => (
								<Radio
									key={gender.id}
									value={gender}
									className={({ checked }) =>
										classNames(
											checked
												? "border-transparent"
												: "border-gray-300",
											"relative flex cursor-pointer rounded-lg border bg-[#D9D9D9] p-2"
										)
									}
								>
									{({ checked }) => (
										<>
											<CheckCircleIcon
												className={classNames(
													!checked
														? "text-[#707579]"
														: "text-[#F34D71]",
													"h-5 w-5 "
												)}
												aria-hidden='true'
											/>
											<span
												className={
													"pointer-events-none absolute -inset-px rounded-lg"
												}
												aria-hidden='true'
											/>
											<span className='flex flex-0 ml-2'>
												<Label
													as='span'
													className='block text-sm font-medium text-gray-900'
												>
													{gender.title}
												</Label>
											</span>
										</>
									)}
								</Radio>
							))}
						</div>
					</RadioGroup>
				</div>
				<div className='mt-4'>
					<label
						htmlFor='first-name'
						className='block text-[12px] font-normal text-white'
					>
						Поиск
					</label>
					<RadioGroup value={selectedFind} onChange={setSelectedFind}>
						<div className='mt-4 grid grid-cols-3 gap-x-2'>
							{finds.map(find => (
								<Radio
									key={find.id}
									value={find}
									className={({ checked }) =>
										classNames(
											checked
												? "border-transparent"
												: "border-gray-300",
											"relative flex cursor-pointer rounded-lg border bg-[#D9D9D9] p-2"
										)
									}
								>
									{({ checked }) => (
										<>
											<CheckCircleIcon
												className={classNames(
													!checked
														? "text-[#707579]"
														: "text-[#F34D71]",
													"h-5 w-5 "
												)}
												aria-hidden='true'
											/>
											<span
												className={
													"pointer-events-none absolute -inset-px rounded-lg"
												}
												aria-hidden='true'
											/>
											<span className='flex ml-1'>
												<Label
													as='span'
													className='block text-sm font-medium text-gray-900'
												>
													{find.title}
												</Label>
											</span>
										</>
									)}
								</Radio>
							))}
						</div>
					</RadioGroup>
				</div>
				<div className='mt-4'>
					<label
						htmlFor='first-name'
						className='block text-[12px] font-normal text-white'
					>
						Фото профиля
					</label>
					<div className='mt-4 grid grid-cols-3 gap-x-2'>
						<button
							type='button'
							className='relative block w-full rounded-lg bg-[#D9D9D9] p-12 text-center'
						></button>
						<button
							type='button'
							className='relative block w-full rounded-lg bg-[#D9D9D9] p-12 text-center'
						></button>
						<button
							type='button'
							className='relative block w-full rounded-lg bg-[#D9D9D9] p-12 text-center'
						></button>
					</div>
				</div>
			</div>
		</form>
	)
}
