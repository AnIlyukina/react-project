import {useAppDispatch} from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {useSelector} from 'react-redux';
import {getArticlesPageView} from '@/pages/ArticlesPage/model/selectors/articlesPageSelectors';
import {useCallback} from 'react';
import {ArticleView} from '@/entities/Article';
import {articlesPageActions} from '@/pages/ArticlesPage/model/slices/articlesPageSlice';
import {ArticleViewSelector} from '@/features/ArticleViewSelector';
import {useArticleFilters} from '@/pages/ArticlesPage/lib/hooks/useArticleFilters';

interface ViewSelectorContainerProps {
    className?: string
}

export const ViewSelectorContainer = ({className}: ViewSelectorContainerProps) => {

    const {view, onChangeView} = useArticleFilters();

    return (
        <ArticleViewSelector className={className} view={view} onViewClick={onChangeView} />
    );
};