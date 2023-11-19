import {classNames} from 'shared/lib/classNames/classNames';
import styles from './ArticleCodeBlockComponent.module.scss';
import {useTranslation} from 'react-i18next';

interface ArticleCodeBlockComponentProps {
    className?: string
}

export const ArticleCodeBlockComponent = ({className}: ArticleCodeBlockComponentProps) => {
    const {t} = useTranslation();
    return (
        <div className={classNames(styles.ArticleCodeBlockComponent, {}, [className])}>
            ArticleCodeBlockComponent
        </div>
    );
};