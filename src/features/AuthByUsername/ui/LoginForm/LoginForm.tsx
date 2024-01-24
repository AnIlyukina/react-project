import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import {
    AppButton,
    ThemeButton,
} from '@/shared/ui/deprecatad/AppButton/AppButton';
import { AppInput } from '@/shared/ui/deprecatad/AppInput/AppInput';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginActions } from '@/features/AuthByUsername';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { AppText, TextTheme } from '@/shared/ui/deprecatad/AppText/ui/AppText';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import {
    DynamicModuleLoader,
    ReducerList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { loginReducer } from '@/features/AuthByUsername/model/slice/loginSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducerList = {
    login: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const dispatch = useAppDispatch();

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUserName(value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const onLoginClick = useCallback(async () => {
        //@ts-ignore
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [onSuccess, dispatch, username, password]);

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div className={classNames(styles.LoginForm, {}, [className])}>
                <AppText title={t('Форма авторизации')} />
                {error && <AppText text={error} theme={TextTheme.ERROR} />}
                <AppInput
                    autofocus
                    className={styles.input}
                    placeholder="Введите username"
                    value={username}
                    onChange={onChangeUsername}
                />
                <AppInput
                    className={styles.input}
                    placeholder="Введите password"
                    onChange={onChangePassword}
                    value={password}
                />
                <AppButton
                    theme={ThemeButton.OUTLINE}
                    className={styles.loginBtn}
                    onClick={onLoginClick}
                    disabled={isLoading}
                >
                    {t('Войти')}
                </AppButton>
            </div>
        </DynamicModuleLoader>
    );
});

LoginForm.displayName = 'LoginForm';

export default LoginForm;
