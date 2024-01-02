import {lazy} from 'react';
export const ForbiddenPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // для прелоадера
    setTimeout(() => resolve(import('./ForbiddenPage')), 1500);
}));