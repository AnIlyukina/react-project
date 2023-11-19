import {classNames} from 'shared/lib/classNames/classNames';
import styles from './ArticleDetails.module.scss';
import {useTranslation} from 'react-i18next';
import {DynamicModuleLoader, ReducerList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {articleDetailsReducer} from '../../model/slice/articleDetailsSlice';
import {memo, useEffect} from 'react';
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {fetchArticleById} from '../../model/services/fetchArticleById/fetchArticleById';

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const reducers: ReducerList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {

    const { className, id } = props;
    const {t} = useTranslation();

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchArticleById(id));
    }, [dispatch, id]);
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(styles.ArticleDetails, {}, [className])}>
                ArticleDetails
            </div>
        </DynamicModuleLoader>
    );
});

ArticleDetails.displayName = 'ArticleDetails';