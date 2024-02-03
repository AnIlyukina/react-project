import {classNames} from '@/shared/lib/classNames/classNames';
import styles from './ArticlesPage.module.scss';
import {useAppDispatch} from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {useSearchParams} from 'react-router-dom';
import {memo, useCallback} from 'react';
import {DynamicModuleLoader, ReducerList,} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {fetchNextArticlesPage} from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import {ArticlesPageFilters} from '@/pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters';
import {useInitialEffect} from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import {articlesPageReducer} from '../../model/slices/articlesPageSlice';
import {initArticlesPage} from '../../model/services/initArticlesPage/initArticlesPage';
import {Page} from '@/widgets/Page/Page';
import {ArticleInfiniteList} from '@/pages/ArticlesPage/ui/ArticleInfiniteList/ArticleInfiniteList';
import {ArticlePageGreeting} from '@/features/articlePageGreeting';
import {ToggleFeatures} from '@/shared/lib/features/ToggleFeatures/ToggleFeatures';
import {StickyContentLayout} from '@/layout/StickyContentLayout';
import {ViewSelectorContainer} from '@/pages/ArticlesPage/ui/ViewSelectorContainer/ViewSelectorContainer';
import {FiltersContainer} from '@/pages/ArticlesPage/ui/FiltersContainer/FiltersContainer';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducerList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
    const {className} = props;
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    const content = <ToggleFeatures
        feature={'isAppRedesigned'}
        on={
            <StickyContentLayout
                left={<ViewSelectorContainer/>}
                right={<FiltersContainer/>}
                content={
                    <Page
                        onScrollEnd={onLoadNextPart}
                        className={classNames(styles.ArticlesPageRedesigned  , {}, [className])}
                    >
                        <ArticleInfiniteList className={styles.list}/>
                        <ArticlePageGreeting/>
                    </Page>}/>
                }
        off={
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(styles.ArticlesPage, {}, [className])}
            >
                <ArticlesPageFilters/>
                <ArticleInfiniteList className={styles.list}/>
                <ArticlePageGreeting/>
            </Page>
        }
    />;

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            {content}
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
