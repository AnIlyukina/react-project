import { Currency } from '../../model/types/currency';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox } from '@/shared/ui/deprecatad/Popups';

interface CurrencySelectProp {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const option = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];
export const CurrencySelect = memo((props: CurrencySelectProp) => {
    const { t } = useTranslation();

    const { className, value, onChange, readonly } = props;

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Currency);
        },
        [onChange],
    );

    return (
        <ListBox
            className={className}
            value={value}
            defaultValue={t('Укажите валюту')}
            items={option}
            onChange={onChangeHandler}
            readonly={readonly}
            direction="topRight"
            label="Укажите валюту"
        />
    );
});

CurrencySelect.displayName = 'CurrencySelect';
