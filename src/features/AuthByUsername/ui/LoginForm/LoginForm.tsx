import {classNames} from 'shared/lib/classNames/classNames';
import styles from './LoginForm.module.scss';
import {useTranslation} from 'react-i18next';
import {AppButton, ThemeButton} from 'shared/ui/AppButton/AppButton';
import {AppInput} from 'shared/ui/AppInput/AppInput';
import {useDispatch, useSelector, useStore} from 'react-redux';
import {memo, useCallback, useEffect} from 'react';
import {loginActions} from 'features/AuthByUsername';
import {getLoginState} from '../../model/selectors/getLoginState/getLoginState';
import {loginByUsername} from '../../model/services/loginByUsername/loginByUsername';
import {AppText, TextTheme} from 'shared/ui/AppText/ui/AppText';
import {ReduxStoreWithManager} from 'app/providers/StoreProvider';
import {loginReducer} from 'features/AuthByUsername/model/slice/loginSlice';

export interface LoginFormProps {
    className?: string
}
const LoginForm = memo(({className}: LoginFormProps) => {
    const {t} = useTranslation();

    const store = useStore() as ReduxStoreWithManager;

    const {
        username,
        password,
        isLoading,
        error } = useSelector(getLoginState);

    useEffect(() => {
        store.reducerManager.add('login', loginReducer);

        return () => {
            store.reducerManager.remove('login');
        };
        //eslint-disable-next-line
    }, []);

    const dispatch = useDispatch();

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUserName(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        //@ts-ignore
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);
    
    return (
        <div className={classNames(styles.LoginForm, {}, [className])}>
            <AppText title={t('Форма авторизации')}/>
            {error &&
                <AppText text={error} theme={TextTheme.ERROR}/>
            }
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
                disabled={isLoading}
            >
                {t('Войти')}
            </AppButton>
        </div>
    );
});

LoginForm.displayName = 'LoginForm';

export default LoginForm;