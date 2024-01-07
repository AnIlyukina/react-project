import {useTranslation} from 'react-i18next';
import {RatingCard} from '@/entities/Rating';
import {useArticleRating, useRateArticle} from '../../api/ArticleRatingApi';
import {useSelector} from 'react-redux';
import {getUserAuthData} from '@/entities/User';
import {Skeleton} from '@/shared/ui/Skeleton/Skeleton';
import { useCallback } from 'react';

export interface ArticleRatingProps {
    className?: string;
    articleId: string;
}

const ArticleRating = (props: ArticleRatingProps) => {
    const {t} = useTranslation();

    const {className, articleId} = props;

    const userData = useSelector(getUserAuthData);
    const { data, isLoading } = useArticleRating({
        articleId,
        userId: userData?.id ?? '',
    });

    const [rateArticleMutation] = useRateArticle();


    const handleRateArticle = useCallback((starsCount: number, feedback?: string) => {
        try {
            rateArticleMutation({
                userId: userData?.id ?? '',
                articleId,
                rate: starsCount,
                feedback,
            });
        } catch (e) {
            console.log(e);
        }
    }, [articleId, rateArticleMutation, userData?.id]);

    const onAccept = useCallback((starsCount: number, feedback?: string) => {
        handleRateArticle(starsCount, feedback);
    }, [handleRateArticle]);

    const onCancel = useCallback((starsCount: number) => {
        handleRateArticle(starsCount);
    },  [handleRateArticle]);

    if (isLoading) {
        return <Skeleton width='100%' height={120 }/>;
    }

    const rating = data?.[0];

    return (
        <RatingCard
            onCancel={onCancel}
            onAccept={onAccept}
            rate={rating?.rate}
            className={className}
            title={t('Оцените статью?')}
            feedbackTitle={t('Оставьте отзыв о статье, это поможет улучшить качество')}
            hasFeedback
        />
    );
};

export default ArticleRating;