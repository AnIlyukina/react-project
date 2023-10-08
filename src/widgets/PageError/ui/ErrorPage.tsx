import {classNames} from 'shared/lib/classNames/classNames';
import styles from './ErrorPage.module.scss';
import {useTranslation} from 'react-i18next';
import {AppButton} from 'shared/ui/AppButton/AppButton';

interface ErrorPageProps {
    className?: string
}
export const ErrorPage = ({className}: ErrorPageProps) => {

    const { t } = useTranslation();

    const reloadPage = () => {
        location.reload();
    };

    return (
        <div className={classNames(styles.ErrorPage, {}, [className])}>
            <p>{t('Произошла непредвиенная ошибка')}</p>
            <AppButton onClick={reloadPage}>
                {t('Обновить страницу')}
            </AppButton>
        </div>
    );
};