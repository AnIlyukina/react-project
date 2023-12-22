import {classNames} from 'shared/lib/classNames/classNames';
import styles from './ArticleDetails.module.scss';
import {useTranslation} from 'react-i18next';
import {DynamicModuleLoader, ReducerList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {articleDetailsReducer} from '../../model/slice/articleDetailsSlice';
import {memo, useCallback, useEffect} from 'react';
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {fetchArticleById} from '../../model/services/fetchArticleById/fetchArticleById';
import {useSelector} from "react-redux";
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading
} from "../../model/selectors/articleDetails";
import {AppText, TextAlign, TextSize} from "shared/ui/AppText/ui/AppText";
import {Skeleton} from "shared/ui/Skeleton/Skeleton";
import {Avatar} from "shared/ui/Avatar/ui/Avatar";
import {ArticleBlock, ArticleTypeBlock} from "../../model/types/article";
import {ArticleCodeBlockComponent} from "entities/Article/ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import {ArticleImageBlockComponent} from "entities/Article/ui/ArticleImageBlockComponent/ArticleImageBlockComponent";
import {ArticleTextBlockComponent} from "entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent";
import {HStack, VStack} from "shared/ui/Stack";

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
    const isLoading = useSelector(getArticleDetailsIsLoading) ;
    const article = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
            case ArticleTypeBlock.CODE:
                return <ArticleCodeBlockComponent
                    block={block}
                    className={styles.block}
                />;
            case ArticleTypeBlock.IMAGE:
                return <ArticleImageBlockComponent
                    block={block}
                    className={styles.block}
                />;
            case ArticleTypeBlock.TEXT:
                return <ArticleTextBlockComponent
                    className={styles.block}
                    block={block}
                />;
            default:
                return null;
        }
    }, [])

    let content;

    if (isLoading) {
        content = (
            <div>
                <Skeleton
                    className={styles.avatar}
                    width={200}
                    height={200}
                    border={'50%'}
                />

                <Skeleton
                    className={styles.title}
                    width={300}
                    height={32}
                />

                <Skeleton
                    className={styles.skeleton}
                    width={600}
                    height={24}
                />

                <Skeleton
                    className={styles.skeleton}
                    width={'100%'}
                    height={200}
                />

                <Skeleton
                    className={styles.skeleton}
                    width={'100%'}
                    height={200}
                />
            </div>
        )
    } else if (error) {
        content = (
            <AppText
                align={TextAlign.CENTER}
                title={t('Произошла ошибка при загрузке статьи')}
            />
        )
    } else {
        content = (
            <>
                <HStack justify='center' max className={styles.avatarWrapper}>
                    <Avatar
                        src={article?.img}
                        size={200}
                        className={styles.avatar}
                    />
                </HStack>
                <VStack gap='4' max>
                    <AppText
                        className={styles.title}
                        title={article?.title}
                        text={article?.subtitle}
                        size={TextSize.L}
                    />
                    <HStack gap='8'>
                        <span>Иконка</span>
                        <AppText text={String(article?.views)}/>
                    </HStack>
                    <HStack gap='8'>
                        <span>Иконка</span>
                        <AppText text={article?.createdAt}/>
                    </HStack>
                </VStack>
                {article?.blocks.map(renderBlock)}
            </>
        )
    }

    useEffect(() => {
        dispatch(fetchArticleById(id));
    }, [dispatch, id]);
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <VStack gap='16' className={classNames(styles.ArticleDetails, {}, [className])}>
                { content }
            </VStack>
        </DynamicModuleLoader>
    );
});

ArticleDetails.displayName = 'ArticleDetails';