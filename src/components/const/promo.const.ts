import { promoInterface } from "../models";
import { Promo1 } from "../pages/Promo/Promo1";
import { Promo2 } from "../pages/Promo/Promo2";
import { Promo3 } from "../pages/Promo/Promo3";

export const promo: promoInterface[] = [
    {
        id: 1,
        component: Promo1
    },
    {
        id: 2,
        component: Promo2
    },
    {
        id: 3,
        component: Promo3
    }
]