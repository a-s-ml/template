export interface INavigate {
	name: string
	icon: React.ForwardRefExoticComponent<
		Omit<React.SVGProps<SVGSVGElement>, "ref">
	>
	component: () => JSX.Element
}
