export const ErrorPage = () => {
	const tg = window.Telegram.WebApp
	return (
		<main className='grid min-h-full place-items-center bg-black px-6 py-24 sm:py-32 lg:px-8'>
			<div className='text-center'>
				<h1 className='mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl'>
					Error
				</h1>
				<p className='mt-6 text-base leading-7 text-white'>
					{tg.platform} {tg.version}
				</p>
			</div>
		</main>
	)
}
