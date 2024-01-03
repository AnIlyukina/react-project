import {memo} from 'react';
import {ArticleList} from 'entities/Article';
import {useSelector} from 'react-redux';
import {getArticles} from 'pages/ArticlesPage/model/slices/articlesPageSlice';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView
} from '../../model/selectors/articlesPageSelectors';
import {AppText} from 'shared/ui/AppText/ui/AppText';
import {useTranslation} from 'react-i18next';

interface ArticleInfiniteListProps {
    className?: string
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {

    const {className} = props;
    const { t } = useTranslation();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const error = useSelector(getArticlesPageError);


    if (error) {
        return (
            <AppText text={t('Ошибка при загрузке статей')}/>
        );
    }

    return (
        <ArticleList
            isLoading={isLoading}
            view={view}
            articles={articles}
            className={className}
        />
    );
});
ArticleInfiniteList.displayName = 'ArticleInfiniteList';