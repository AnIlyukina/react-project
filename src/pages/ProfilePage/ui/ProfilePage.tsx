import {classNames} from 'shared/lib/classNames/classNames';
//import styles from './ProfilePage.module.scss';
import {DynamicModuleLoader, ReducerList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    getProfileValidateErrors,
    profileActions,
    ProfileCard,
    profileReducer, ValidateProfileError,
} from 'entities/Profile';

import {useCallback, useEffect} from 'react';
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {useSelector} from 'react-redux';
import {ProfilePageHeader} from './ProfilePageHeader/ProfilePageHeader';
import {Currency} from 'entities/Currency';

import {Country} from 'entities/Country';
import {AppText, TextTheme} from 'shared/ui/AppText/ui/AppText';
import {useTranslation} from 'react-i18next';
import {VStack} from 'shared/ui/Stack/VStack/VStack';

interface ProfilePageProps {
    className?: string
}

const reducers: ReducerList = {
    profile: profileReducer
};
const ProfilePage = ({className}: ProfilePageProps) => {

    const { t } = useTranslation();

    const dispatch = useAppDispatch();
    const profileForm = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);

    const validateErrorTranslate = {
        [ValidateProfileError.SERVER_ERROR]: t('Серверная ошибка при сохранении'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректный регион'),
        [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Имя и фамилия обязательны'),
        [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
    };

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchProfileData());
        }
    }, [dispatch]);

    const onChangeFirstName = useCallback((value? : string) => {
        dispatch(profileActions.updateProfile({first: value || ''}));
    }, [dispatch]);

    const onChangeLastName = useCallback((value? : string) => {
        dispatch(profileActions.updateProfile({lastname: value || ''}));
    }, [dispatch]);

    const onChangeAge = useCallback((value? : string) => {
        dispatch(profileActions.updateProfile({age: Number(value)}));
    }, [dispatch]);

    const onChangeCity = useCallback((value? : string) => {
        dispatch(profileActions.updateProfile({city: value || ''}));
    }, [dispatch]);

    const onChangeAvatar = useCallback((value? : string) => {
        dispatch(profileActions.updateProfile({avatar: value || ''}));
    }, [dispatch]);

    const onChangeUsername = useCallback((value? : string) => {
        dispatch(profileActions.updateProfile({username: value || ''}));
    }, [dispatch]);


    const onChangeCurrency = useCallback((currency? : Currency) => {
        dispatch(profileActions.updateProfile({currency}));
    }, [dispatch]);

    const onChangeCountry = useCallback((country? : Country) => {
        dispatch(profileActions.updateProfile({country}));
    }, [dispatch]);


    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount
        >
            <div className={classNames('', {}, [className])}>
                <VStack max={true} gap='16'>
                    <ProfilePageHeader/>
                    {validateErrors?.length && validateErrors.map(err => (
                        <AppText
                            key={err}
                            theme={TextTheme.ERROR}
                            text={validateErrorTranslate[err]}
                        />
                    ))}
                    <ProfileCard
                        profileData={profileForm}
                        isLoading={isLoading}
                        error={error}
                        readonly={readonly}
                        onChangeFirstName={onChangeFirstName}
                        onChangeLastName={onChangeLastName}
                        onChangeAge={onChangeAge}
                        onChangeCity={onChangeCity}
                        onChangeAvatar={onChangeAvatar}
                        onChangeUsername={onChangeUsername}
                        onChangeCurrency={onChangeCurrency}
                        onChangeCountry={onChangeCountry}
                    />
                </VStack>
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;