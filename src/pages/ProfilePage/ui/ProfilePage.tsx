import {classNames} from 'shared/lib/classNames/classNames';
//import styles from './ProfilePage.module.scss';
import {DynamicModuleLoader, ReducerList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

import {
    fetchProfileData,
    getProfileError,
    getProfileIsLoading,
    ProfileCard,
    profileReducer,
    profileActions,
    getProfileReadonly,
    getProfileForm,
} from 'entities/Profile';

import {useCallback, useEffect} from 'react';
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {useSelector} from 'react-redux';
import {ProfilePageHeader} from './ProfilePageHeader/ProfilePageHeader';

interface ProfilePageProps {
    className?: string
}

const reducers: ReducerList = {
    profile: profileReducer
};
const ProfilePage = ({className}: ProfilePageProps) => {

    const dispatch = useAppDispatch();
    const profileForm = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    const readonly = useSelector(getProfileReadonly);
    
    useEffect(() => {
        dispatch(fetchProfileData());
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
        dispatch(profileActions.updateProfile({city: value}));
    }, [dispatch]);

    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount
        >
            <div className={classNames('', {}, [className])}>
                <ProfilePageHeader/>
                <ProfileCard
                    profileData={profileForm}
                    isLoading={isLoading}
                    error={error}
                    readonly={readonly}
                    onChangeFirstName={onChangeFirstName}
                    onChangeLastName={onChangeLastName}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;