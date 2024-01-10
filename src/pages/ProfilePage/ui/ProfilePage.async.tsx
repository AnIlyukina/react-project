import { lazy } from 'react';

export const ProfilePagesAsync = lazy(
    () =>
        new Promise((resolve) => {
            // @ts-ignore
            setTimeout(() => resolve(import('./ProfilePage')), 1500);
        }),
);
