interface BlockProps {
	children: React.ReactNode
	start: string
	placement: string
}
export const Block = ({ children, start, placement }: BlockProps) => {
	return (
		<div
			className={`flex flex-col items-${start} justify-${placement} bg-tgSecondaryBgColor w-full p-4 mb-4 rounded-lg`}
		>
			{children}
		</div>
	)
}
