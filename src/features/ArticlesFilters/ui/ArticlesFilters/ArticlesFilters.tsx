import {classNames} from '@/shared/lib/classNames/classNames';
import styles from './ArticlesFilters.module.scss';
import {useTranslation} from 'react-i18next';
import {Card} from '@/shared/ui/redesigned/Card/Card';
import cls from '@/pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters.module.scss';
import {ArticleSortSelector} from '@/features/ArticleSortSelector';
import {AppInput} from '@/shared/ui/deprecatad/AppInput/AppInput';
import {ArticleTypeTabs} from '@/features/ArticleTypeTabs';
import {VStack} from '@/shared/ui/redesigned/Stack';
import {ArticleSortField, ArticleType} from '@/entities/Article';
import {SortOrder} from '@/shared/types/sort';

interface ArticlesFiltersProps {
    className?: string
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
    search: string;
    type: ArticleType;
    onChangeSearch: (value: string) => void;
    onChangeType: (type: ArticleType) => void;
}

export const ArticlesFilters = (props: ArticlesFiltersProps) => {
    const {t} = useTranslation();
    const {
        className,
        sort,
        order,
        onChangeOrder,
        onChangeSort,
        onChangeType,
        onChangeSearch,
        search,
        type
    } = props;

    return (
        <Card
            className={classNames(styles.ArticlesFilters, {}, [className])}
            padding='24'
        >
            <VStack gap='32'>
                <AppInput
                    onChange={onChangeSearch}
                    value={search}
                    placeholder={t('Поиск')}
                />
                <ArticleTypeTabs
                    value={type}
                    onChangeType={onChangeType}
                    className={cls.tabs}
                />
                <ArticleSortSelector
                    order={order}
                    sort={sort}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
            </VStack>
        </Card>
    );
};