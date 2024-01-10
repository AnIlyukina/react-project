import { lazy } from 'react';

export const AdminPanelPageAsync = lazy(
    () =>
        new Promise((resolve) => {
            // @ts-ignore
            // для прелоадера
            setTimeout(() => resolve(import('./AdminPanelPage')), 1500);
        }),
);
