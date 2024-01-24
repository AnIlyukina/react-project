import { lazy, Suspense } from 'react';
import { ArticleRatingProps } from './ArticleRating';
import { Skeleton } from '@/shared/ui/deprecatad/Skeleton/Skeleton';

export const ArticleRatingLazy = lazy(
    () =>
        new Promise((resolve) => {
            // @ts-ignore
            // для прелоадера
            setTimeout(() => resolve(import('./ArticleRating')), 1500);
        }),
);

export const ArticleRatingAsync = (props: ArticleRatingProps) => {
    return (
        <Suspense fallback={<Skeleton width="100%" height={120} />}>
            <ArticleRatingLazy {...props} />
        </Suspense>
    );
};
