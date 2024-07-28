import {
	HomeIcon,
	WrenchIcon
} from "@heroicons/react/20/solid"
import { ErrorPage } from "../pages/ErrorPage"
import { Navigate } from "../models/navigate.interface"

export const navigate: Navigate[] = [
	{
		name: "Лотереи",
		icon: HomeIcon,
		component: ErrorPage
	},
	{
		name: "Бонусы",
		icon: WrenchIcon,
		component: ErrorPage
	},
]
