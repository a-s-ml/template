import styles from "./Preloader.module.css"

export const Preloader = () => {
	return (
		<div className='h-screen'>
			<div className='flex items-center justify-center w-full h-1/2'>
				<span className={styles.loader} />
			</div>
		</div>
	)
}
