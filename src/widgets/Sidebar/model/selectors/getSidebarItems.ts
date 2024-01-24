import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import AboutIconDeprecated from '@/shared/assets/icon/about-20-20.svg?react';
import MainIconDeprecated from '@/shared/assets/icon/home-page.svg?react';
import ProfileIconDeprecated from '@/shared/assets/icon/profile-20-20.svg?react';
import ArticlesIconDeprecated from '@/shared/assets/icon/article-page.svg?react';

import AboutIcon from '@/shared/assets/icon/Info.svg?react';
import MainIcon from '@/shared/assets/icon/home.svg?react';
import ProfileIcon from '@/shared/assets/icon/avatar.svg?react';
// Todo заменить картинку ArticlesIcon
import ArticlesIcon from '@/shared/assets/icon/article.svg?react';

import { SidebarItemType } from '../types/sidebar';
import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
} from '@/shared/const/router';
import { toggleFeatures } from '@/shared/lib/features';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: getRouteMain(),
            Icon: toggleFeatures({
                name: 'isAppRedesigned',
                on: () => MainIcon,
                off: () => MainIconDeprecated,
            }),
            text: 'Главная',
        },
        {
            path: getRouteAbout(),
            Icon: toggleFeatures({
                name: 'isAppRedesigned',
                on: () => AboutIcon,
                off: () => AboutIconDeprecated,
            }),
            text: 'О сайте',
        },
    ];

    if (userData) {
        sidebarItemsList.push(
            {
                path: getRouteProfile(userData.id),
                Icon: toggleFeatures({
                    name: 'isAppRedesigned',
                    on: () => ProfileIcon,
                    off: () => ProfileIconDeprecated,
                }),
                text: 'Профиль',
                authOnly: true,
            },
            {
                path: getRouteArticles(),
                Icon: toggleFeatures({
                    name: 'isAppRedesigned',
                    on: () => ArticlesIcon,
                    off: () => ArticlesIconDeprecated,
                }),
                text: 'Статьи',
                authOnly: true,
            },
        );
    }

    return sidebarItemsList;
});
