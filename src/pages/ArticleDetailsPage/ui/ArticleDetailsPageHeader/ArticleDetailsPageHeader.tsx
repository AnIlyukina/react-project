import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppButton, ThemeButton } from '@/shared/ui/AppButton/AppButton';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from '@/entities/Article/model/selectors/articleDetails';
import { HStack } from '@/shared/ui/Stack';
import { getCanEditArticle } from '../../model/selectors/article';
import {getRouteArticleEdit, getRouteArticles} from "@/shared/const/router";

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const navigate = useNavigate();
    const canEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetailsData);

    const onBackToList = useCallback(() => {
        navigate(getRouteArticles());
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        if (article) {
            navigate(getRouteArticleEdit(article.id));
        }
    }, [article?.id, navigate]);

    return (
        <HStack max justify="between" className={classNames('', {}, [className])}>
            <AppButton theme={ThemeButton.OUTLINE} onClick={onBackToList}>
                {t('Назад к списку')}
            </AppButton>
            {canEdit && (
                <AppButton
                    theme={ThemeButton.OUTLINE}
                    onClick={onEditArticle}
                >
                    {t('Редактировать')}
                </AppButton>
            )}
        </HStack>
    );
});

ArticleDetailsPageHeader.displayName = 'ArticleDetailsPageHeader';