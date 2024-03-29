import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './PageError.module.scss';
import { useTranslation } from 'react-i18next';
import { AppButton } from '@/shared/ui/deprecatad/AppButton/AppButton';

interface ErrorPageProps {
    className?: string;
}
export const PageError = ({ className }: ErrorPageProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        location.reload();
    };

    return (
        <div className={classNames(styles.ErrorPage, {}, [className])}>
            <p>{t('Произошла непредвиенная ошибка')}</p>
            <AppButton onClick={reloadPage}>{t('Обновить страницу')}</AppButton>
        </div>
    );
};
