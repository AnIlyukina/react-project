import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    AppButton as AppButtonDeprecated,
    ThemeButton as ThemeButtonDeprecated,
} from '@/shared/ui/deprecatad/AppButton/AppButton';
import { ToggleFeatures } from '@/shared/lib/features/ToggleFeatures/ToggleFeatures';
import { AppButton } from '@/shared/ui/redesigned/AppButton/AppButton';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

/**
 * @deprecated
 */

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <AppButton variant="clear" onClick={toggleLanguage}>
                    {t(short ? 'Короткий язык' : 'Язык')}
                </AppButton>
            }
            off={
                <AppButtonDeprecated
                    className={classNames('', {}, [className])}
                    theme={ThemeButtonDeprecated.CLEAR}
                    onClick={toggleLanguage}
                >
                    {t(short ? 'Короткий язык' : 'Язык')}
                </AppButtonDeprecated>
            }
        />
    );
});

LangSwitcher.displayName = 'LangSwitcher';
