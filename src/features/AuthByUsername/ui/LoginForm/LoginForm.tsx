import {classNames} from 'shared/lib/classNames/classNames';
import styles from './LoginForm.module.scss';
import {useTranslation} from 'react-i18next';
import {AppButton} from 'shared/ui/AppButton/AppButton';
import {AppInput} from 'shared/ui/AppInput/AppInput';

interface LoginFormProps {
    className?: string
}
export const LoginForm = ({className}: LoginFormProps) => {
    const {t} = useTranslation();
    
    return (
        <div className={classNames(styles.LoginForm, {}, [className])}>
            <AppInput autofocus className={styles.input} placeholder='Введите username'/>
            <AppInput className={styles.input} placeholder='Введите password'/>
            <AppButton className={styles.loginBtn}>
                {t('Войти')}
            </AppButton>
        </div>
    );
};