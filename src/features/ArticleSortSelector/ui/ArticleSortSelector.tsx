import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import {
    AppSelect,
    SelectOption,
} from '@/shared/ui/deprecatad/Select/AppSelect';
import { SortOrder } from '@/shared/types/sort';
import styles from './ArticleSortSelector.module.scss';
import { ArticleSortField } from '@/entities/Article';
import {ToggleFeatures} from '@/shared/lib/features/ToggleFeatures/ToggleFeatures';
import {ListBox} from '@/shared/ui/redesigned/Popups';
import {VStack} from '@/shared/ui/redesigned/Stack';
import {AppText} from '@/shared/ui/redesigned/AppText/ui/AppText';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const { className, onChangeOrder, onChangeSort, order, sort } = props;
    const { t } = useTranslation();

    const orderOptions = useMemo<SelectOption[]>(
        () => [
            {
                value: 'asc',
                content: t('возрастанию'),
            },
            {
                value: 'desc',
                content: t('убыванию'),
            },
        ],
        [t],
    );

    const sortFieldOptions = useMemo<SelectOption[]>(
        () => [
            {
                value: ArticleSortField.CREATED,
                content: t('дате создания'),
            },
            {
                value: ArticleSortField.TITLE,
                content: t('названию'),
            },
            {
                value: ArticleSortField.VIEWS,
                content: t('просмотрам'),
            },
        ],
        [t],
    );

    const changeSortHandler = useCallback(
        (newSort: string) => {
            onChangeSort(newSort as ArticleSortField);
        },
        [onChangeSort],
    );

    const changeOrderHandler = useCallback(
        (newOrder: string) => {
            onChangeOrder(newOrder as SortOrder);
        },
        [onChangeOrder],
    );

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <div
                    className={classNames(styles.ArticleSortSelectorRedesigned, {}, [className])}
                >
                    <VStack gap='8'>
                        <AppText text={t('Сортировать по:')}/>
                        <ListBox
                            items={sortFieldOptions}
                            value={sort}
                            onChange={changeSortHandler}
                        />
                        <ListBox
                            items={orderOptions}
                            value={order}
                            onChange={changeOrderHandler}
                        />
                    </VStack>
                </div>
            }
            off={
                <div
                    className={classNames(styles.ArticleSortSelector, {}, [className])}
                >
                    <AppSelect
                        options={sortFieldOptions}
                        label={t('Сортировать ПО')}
                        value={sort}
                        onChange={changeSortHandler}
                    />
                    <AppSelect
                        options={orderOptions}
                        label={t('по')}
                        value={order}
                        onChange={changeOrderHandler}
                        className={styles.order}
                    />
                </div>
            }/>
    );
});

ArticleSortSelector.displayName = 'ArticleSortSelector';
