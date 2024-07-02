import { routes } from "@/constants";
import { BurgerMenuItem } from "../types";

export const BurgerMenuOptions: BurgerMenuItem[] = [
    {
        link: routes.home,
        content: "Home"
    },
    {
        link: routes.shop,
        content: "Shop"
    },
    {
        link: routes.home,
        content: "About"
    },
    {
        link: routes.home,
        content: "Blog"
    },
    {
        link: routes.contact,
        content: "Help"
    },
    {
        link: routes.contact,
        content: "Contact"
    },
    {
        link: routes.shop,
        content: "Search"
    }
];
