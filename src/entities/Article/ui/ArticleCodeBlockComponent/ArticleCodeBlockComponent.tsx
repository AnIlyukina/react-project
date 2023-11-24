import {classNames} from 'shared/lib/classNames/classNames';
import styles from './ArticleCodeBlockComponent.module.scss';
import {useTranslation} from 'react-i18next';
import {memo} from "react";
import {ArticleCodeBlock} from "../../model/types/article";
import {Code} from "shared/ui/Code/Code";

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo((props: ArticleCodeBlockComponentProps) => {
    const {t} = useTranslation();

    const {className, block} = props;
    return (
        <div className={classNames(styles.ArticleCodeBlockComponent, {}, [className])}>
            <Code>
                {block.code}
            </Code>
        </div>
    );
});
ArticleCodeBlockComponent.displayName = 'ArticleCodeBlockComponent';
