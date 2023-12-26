import {classNames} from 'shared/lib/classNames/classNames';
import {memo, useCallback} from 'react';
import {AppText, TextSize} from "shared/ui/AppText/ui/AppText";
import styles from "pages/ArticleDetailsPage/ui/ArticleDetailsPage/ArticleDetailsPage.module.scss";
import {AddCommentForm} from "features/addCommentForm";
import {CommentList} from "entities/Comment";
import {useDispatch, useSelector} from "react-redux";
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import {getArticleComments} from "../../model/slices/articleDetailsCommentsSlice";
import {useTranslation} from "react-i18next";
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import {
    fetchCommentsByArticleId
} from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";

interface ArticleDetailsCommentProps {
    className?: string;
    id: string;
}

export const ArticleDetailsComment = memo((props: ArticleDetailsCommentProps) => {

    const {className, id} = props;
    const { t } = useTranslation('article-details');

    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

    const dispatch = useDispatch();

    useInitialEffect(() => {
        //@ts-ignore
        dispatch(fetchCommentsByArticleId(id));
    });

    const onSendComment = useCallback((text: string) => {
        //@ts-ignore
        dispatch(addCommentForArticle(text));
    }, [dispatch]);


    return (
        <div className={classNames('', {}, [className])}>
            <AppText
                size={TextSize.L}
                className={styles.commentTitle}
                title={t('Комментарии')}
            />
            <AddCommentForm onSendComment={onSendComment} />
            <CommentList
                isLoading={commentsIsLoading}
                comments={comments}
            />
        </div>
    );
});
ArticleDetailsComment.displayName = 'ArticleDetailsComment'