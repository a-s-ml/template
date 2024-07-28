interface FullScreenProps {
	children: React.ReactNode
	style: string
}
export const FullScreen = ({ children, style }: FullScreenProps) => {
	return (
		<div className={`flex flex-col items-center justify-${style} w-full h-screen bg-tgBgColor p-4`}>
			{children}
		</div>
	)
}
