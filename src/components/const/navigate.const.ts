import {
	HomeIcon,
	WrenchIcon,
	UsersIcon,
	CircleStackIcon,
	BanknotesIcon
} from "@heroicons/react/20/solid"
import { TemplatePage } from "../pages"
import { Navigate } from "../models"

export const navigate: Navigate[] = [
	{
		name: "Exchange",
		icon: HomeIcon,
		component: TemplatePage
	},
	{
		name: "Mine",
		icon: WrenchIcon,
		component: TemplatePage
	},
	{
		name: "Friends",
		icon: UsersIcon,
		component: TemplatePage
	},
	{
		name: "Earn",
		icon: CircleStackIcon,
		component: TemplatePage
	},
	{
		name: "Airdrop",
		icon: BanknotesIcon,
		component: TemplatePage
	}
]
