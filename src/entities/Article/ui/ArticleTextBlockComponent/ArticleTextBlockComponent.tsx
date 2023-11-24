import {classNames} from 'shared/lib/classNames/classNames';
import styles from './ArticleTextBlockComponent.module.scss';
import {useTranslation} from 'react-i18next';
import {memo} from "react";
import {ArticleTextBlock} from "../../model/types/article";
import {AppText} from "shared/ui/AppText/ui/AppText";

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
    const {t} = useTranslation();

    const { className, block } = props;
    return (
        <div className={classNames(styles.ArticleTextBlockComponent, {}, [className])}>
            {
                block.title && (
                    <AppText title={block.title} className={styles.title}/>
                )
            }
            {
                block.paragraphs.map(paragraph => (
                        <AppText
                            key={paragraph}
                            text={paragraph}
                            className={styles.paragraph}
                        />
                    )
                )
            }
        </div>
    );
});

ArticleTextBlockComponent.displayName = 'ArticleTextBlockComponent';