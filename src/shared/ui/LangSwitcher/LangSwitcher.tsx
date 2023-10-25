import {memo} from "react";
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {AppButton, ThemeButton} from 'shared/ui/AppButton/AppButton';

interface LangSwitcherProps {
    className?: string,
    short?: boolean,
}
export const LangSwitcher = memo(({className, short}: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <AppButton
            className={classNames('', {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggleLanguage}>
            {t(short ? 'Короткий язык' : 'Язык')}
        </AppButton>
    );
});