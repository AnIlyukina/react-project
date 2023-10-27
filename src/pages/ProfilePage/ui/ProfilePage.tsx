import {classNames} from 'shared/lib/classNames/classNames';
//import styles from './ProfilePage.module.scss';
import {DynamicModuleLoader, ReducerList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {fetchProfileData, ProfileCard, profileReducer} from 'entities/Profile';
import {useEffect} from 'react';
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

interface ProfilePageProps {
    className?: string
}

const reducers: ReducerList = {
    profile: profileReducer
};
const ProfilePage = ({className}: ProfilePageProps) => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount
        >
            <div className={classNames('', {}, [className])}>
                <ProfileCard/>
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;