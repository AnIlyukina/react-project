import React from "react";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import AboutIcon from 'shared/assets/icon/about-page.svg';
import MainIcon from 'shared/assets/icon/home-page.svg';
import ProfileIcon from 'shared/assets/icon/profile-page.svg';

export interface SidebarItemType {
   path: string;
   text: string;
   Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        Icon: MainIcon,
        text: 'Главная',
    },
    {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'О странице',
    },
    {
        path: RoutePath.profile,
        Icon: ProfileIcon,
        text: 'Профиль',
    }
]