import {classNames} from 'shared/lib/classNames/classNames';
//import styles from './ProfilePage.module.scss';
import {DynamicModuleLoader, ReducerList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

import {
    fetchProfileData,
    getProfileError,
    getProfileIsLoading,
    getProfileData,
    ProfileCard,
    profileReducer, profileActions, getProfileReadonly,
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
    const profileData = useSelector(getProfileData);
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

    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount
        >
            <div className={classNames('', {}, [className])}>
                <ProfilePageHeader/>
                <ProfileCard
                    profileData={profileData}
                    isLoading={isLoading}
                    error={error}
                    readonly={readonly}
                    onChangeFirstName={onChangeFirstName}
                    onChangeLastName={onChangeLastName}

                />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;