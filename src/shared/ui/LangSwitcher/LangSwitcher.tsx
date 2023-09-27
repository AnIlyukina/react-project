import {classNames} from "shared/lib/classNames/classNames";
import styles from './LangSwitcher.module.scss'
import {useTranslation} from "react-i18next";
import {AppButton, ThemeButton} from "shared/ui/AppButton/AppButton";

interface LangSwitcherProps {
    className?: string
}
export const LangSwitcher = ({className}: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }
    return (
        <AppButton
            className={classNames(styles.LangSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggleLanguage}>
            {t('Язык')}
        </AppButton>
    );
};