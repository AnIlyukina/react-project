import {classNames} from 'shared/lib/classNames/classNames';
import {AppSelect} from "shared/ui/Select/AppSelect";
import {Country} from "../../model/types/country";
import {useTranslation} from "react-i18next";
import {memo, useCallback} from "react";

interface CountrySelectProp {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const option = [
    {value: Country.Russia, content: Country.Russia},
    {value: Country.Belarus, content: Country.Belarus},
    {value: Country.Ukraine, content: Country.Ukraine},
]
export const CountrySelect = memo((props: CountrySelectProp) => {
    const { t } = useTranslation();

    const {
        className,
        value,
        onChange,
        readonly
    } = props;

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country)
    }, [onChange]);

    return (
        <AppSelect
            className={classNames('', {}, [className])}
            label={t('Укажите cтрану')}
            options={option}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});

CountrySelect.displayName = 'CountrySelect';