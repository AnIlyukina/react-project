import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import styles from './ArticleRecommendationsList.module.scss';
import { memo } from 'react';
import { AppText, TextSize } from '@/shared/ui/AppText/ui/AppText';
import { ArticleList } from '@/entities/Article';
import { VStack } from '@/shared/ui/Stack';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo(
    (props: ArticleRecommendationsListProps) => {
        const { className } = props;
        const { t } = useTranslation();
        const {
            data: recommendations,
            isLoading,
            error,
        } = useArticleRecommendationsList(3);

        if (isLoading || error || !recommendations) {
            return null;
        }

        return (
            <VStack
                gap="8"
                className={classNames(styles.ArticleRecommendationsList, {}, [
                    className,
                ])}
            >
                <AppText size={TextSize.L} title={t('Рекомендуем')} />
                <ArticleList articles={recommendations} target="_blank" />
            </VStack>
        );
    },
);

ArticleRecommendationsList.displayName = 'ArticleRecommendationsList';
