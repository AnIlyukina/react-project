import {classNames} from 'shared/lib/classNames/classNames';
import styles from './ArticleImageBlockComponent.module.scss';
import {useTranslation} from 'react-i18next';
import {memo} from 'react';
import {ArticleImageBlock} from '../../model/types/article';
import {AppText, TextAlign} from 'shared/ui/AppText/ui/AppText';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
    const {t} = useTranslation();

    const { className, block} = props;
    return (
        <div className={classNames(styles.ArticleImageBlockComponent, {}, [className])}>
            <img
                src={block.src}
                className={styles.img}
                alt={block.title}
            />
            { block.title && (
                <AppText
                    text={block.title}
                    align={TextAlign.CENTER}
                />
            )}
        </div>
    );
});

ArticleImageBlockComponent.displayName = 'ArticleImageBlockComponent';