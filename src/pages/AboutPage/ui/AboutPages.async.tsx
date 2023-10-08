import {lazy} from 'react';

export const AboutPagesAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // для прелоадера
    setTimeout(() => resolve(import('./AboutPage')), 1500);
}));