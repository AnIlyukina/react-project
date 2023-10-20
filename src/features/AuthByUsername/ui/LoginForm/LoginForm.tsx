import {classNames} from 'shared/lib/classNames/classNames';
import styles from './LoginForm.module.scss';
import {useTranslation} from 'react-i18next';
import {AppButton, ThemeButton} from 'shared/ui/AppButton/AppButton';
import {AppInput} from 'shared/ui/AppInput/AppInput';
import {useDispatch, useSelector} from "react-redux";
import {memo, useCallback} from "react";
import {loginActions, loginReducer} from "features/AuthByUsername";
import {getLoginState} from "../../model/selectors/getLoginState/getLoginState";
import {loginByUsername} from "../../model/services/loginByUsername/loginByUsername";

interface LoginFormProps {
    className?: string
}
export const LoginForm = memo(({className}: LoginFormProps) => {
    const {t} = useTranslation();

    const { username, password } = useSelector(getLoginState);

    const dispatch = useDispatch();

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUserName(value));
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        //@ts-ignore
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password])
    
    return (
        <div className={classNames(styles.LoginForm, {}, [className])}>
            <AppInput
                autofocus
                className={styles.input}
                placeholder='Введите username'
                value={username}
                onChange={onChangeUsername}
            />
            <AppInput
                className={styles.input}
                placeholder='Введите password'
                onChange={onChangePassword}
                value={password}
            />
            <AppButton
                theme={ThemeButton.OUTLINE}
                className={styles.loginBtn}
                onClick={onLoginClick}
            >
                {t('Войти')}
            </AppButton>
        </div>
    );
});