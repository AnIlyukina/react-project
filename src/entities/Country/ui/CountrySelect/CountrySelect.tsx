import { Country } from '../../model/types/country';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox } from '@/shared/ui/Popups';

interface CountrySelectProp {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const option = [
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Ukraine, content: Country.Ukraine },
];
export const CountrySelect = memo((props: CountrySelectProp) => {
    const { t } = useTranslation();

    const { className, value, onChange, readonly } = props;

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Country);
        },
        [onChange],
    );

    return (
        <ListBox
            value={value}
            defaultValue={t('Укажите страну')}
            className={className}
            readonly={readonly}
            items={option}
            onChange={onChangeHandler}
            direction="topRight"
            label="Укажите страну"
        />
    );
});

CountrySelect.displayName = 'CountrySelect';
