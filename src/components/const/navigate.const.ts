import {
	HomeIcon,
	WrenchIcon,
	UsersIcon,
	CircleStackIcon,
	BanknotesIcon
} from "@heroicons/react/20/solid"
import { INavigate } from "../models"
import { TemplatePage } from "../pages"

export const navigate: INavigate[] = [
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
