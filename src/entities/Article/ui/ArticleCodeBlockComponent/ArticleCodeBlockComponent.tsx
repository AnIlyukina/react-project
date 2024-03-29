import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './ArticleCodeBlockComponent.module.scss';
import { memo } from 'react';
import { ArticleCodeBlock } from '../../model/types/article';
import { Code } from '@/shared/ui/deprecatad/Code/Code';

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo(
    (props: ArticleCodeBlockComponentProps) => {
        const { className, block } = props;
        return (
            <div
                className={classNames(styles.ArticleCodeBlockComponent, {}, [
                    className,
                ])}
            >
                <Code>{block.code}</Code>
            </div>
        );
    },
);
ArticleCodeBlockComponent.displayName = 'ArticleCodeBlockComponent';
