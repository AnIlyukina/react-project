import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { AppText } from '@/shared/ui/deprecatad/AppText/ui/AppText';
import { Icon } from '@/shared/ui/deprecatad/Icon/Icon';
import EyeIcon from '@/shared/assets/icon/eye-20-20.svg?react';
import { Card } from '@/shared/ui/deprecatad/Card/Card';
import { Avatar } from '@/shared/ui/deprecatad/Avatar/ui/Avatar';
import {
    AppButton,
    ThemeButton,
} from '@/shared/ui/deprecatad/AppButton/AppButton';
import { AppLink } from '@/shared/ui/deprecatad/AppLink/AppLink';
import styles from './ArticleListItem.module.scss';
import { Article, ArticleTextBlock } from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleView } from '../../model/consts/consts';
import { ArticleTypeBlock } from '../../model/consts/consts';
import { AppImage } from '@/shared/ui/deprecatad/AppImage/AppImage';
import { Skeleton } from '@/shared/ui/deprecatad/Skeleton/Skeleton';
import { getRouteArticleDetails } from '@/shared/const/router';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const { className, article, view, target } = props;
    const { t } = useTranslation();

    const types = (
        <AppText text={article.type.join(', ')} className={styles.types} />
    );
    const views = (
        <>
            <AppText text={String(article.views)} className={styles.views} />
            <Icon Svg={EyeIcon} />
        </>
    );

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleTypeBlock.TEXT,
        ) as ArticleTextBlock;

        return (
            <div
                className={classNames(styles.ArticleListItem, {}, [
                    className,
                    styles[view],
                ])}
            >
                <Card className={styles.card}>
                    <div className={styles.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <AppText
                            text={article.user.username}
                            className={styles.username}
                        />
                        <AppText
                            text={article.createdAt}
                            className={styles.date}
                        />
                    </div>
                    <AppText title={article.title} className={styles.title} />
                    {types}
                    <AppImage
                        fallback={<Skeleton width="100%" height={250} />}
                        src={article.img}
                        className={styles.img}
                        alt={article.title}
                    />
                    {textBlock && (
                        <ArticleTextBlockComponent
                            block={textBlock}
                            className={styles.textBlock}
                        />
                    )}
                    <div className={styles.footer}>
                        <AppLink
                            target={target}
                            to={getRouteArticleDetails(article.id)}
                        >
                            <AppButton theme={ThemeButton.OUTLINE}>
                                {t('Читать далее...')}
                            </AppButton>
                        </AppLink>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            target={target}
            to={getRouteArticleDetails(article.id)}
            className={classNames(styles.ArticleListItem, {}, [
                className,
                styles[view],
            ])}
        >
            <Card className={styles.card}>
                <div className={styles.imageWrapper}>
                    <AppImage
                        fallback={<Skeleton width={200} height={200} />}
                        alt={article.title}
                        src={article.img}
                        className={styles.img}
                    />
                    <AppText text={article.createdAt} className={styles.date} />
                </div>
                <div className={styles.infoWrapper}>
                    {types}
                    {views}
                </div>
                <AppText text={article.title} className={styles.title} />
            </Card>
        </AppLink>
    );
});

ArticleListItem.displayName = 'ArticleListItem';
