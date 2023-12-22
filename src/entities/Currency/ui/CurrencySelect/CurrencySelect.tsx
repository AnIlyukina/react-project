import {classNames} from 'shared/lib/classNames/classNames';
import {AppSelect} from "shared/ui/Select/AppSelect";
import {Currency} from "../../model/types/currency";
import {useTranslation} from "react-i18next";
import {memo, useCallback} from "react";
import {ListBox} from "shared/ui/ListBox/ListBox";

interface CurrencySelectProp {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const option = [
    {value: Currency.RUB, content: Currency.RUB},
    {value: Currency.EUR, content: Currency.EUR},
    {value: Currency.USD, content: Currency.USD},
]
export const CurrencySelect = memo((props: CurrencySelectProp) => {
    const { t } = useTranslation();

    const {
        className,
        value,
        onChange,
        readonly
    } = props;

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency)
    }, [onChange]);

    return (
        <ListBox
            className={className}
            value={value}
            defaultValue={t('Укажите валюту')}
            items={option}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    )

    // return (
    //     <AppSelect
    //         className={classNames('', {}, [className])}
    //         label={t('Укажите валюту')}
    //         options={option}
    //         value={value}
    //         onChange={onChangeHandler}
    //         readonly={readonly}
    //     />
    // );
});

CurrencySelect.displayName = 'CurrencySelect';