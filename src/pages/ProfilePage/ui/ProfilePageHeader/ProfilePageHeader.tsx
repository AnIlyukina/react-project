import {classNames} from 'shared/lib/classNames/classNames';
import styles from './ProfilePageHeader.module.scss';
import {useTranslation} from 'react-i18next';
import {AppText} from 'shared/ui/AppText/ui/AppText';
import {AppButton, ThemeButton} from 'shared/ui/AppButton/AppButton';
import { useSelector} from 'react-redux';
import {getProfileReadonly, profileActions, updateProfileData} from 'entities/Profile';
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';

interface ProfilePageHeaderProps {
    className?: string
}
export const ProfilePageHeader = ({className}: ProfilePageHeaderProps) => {
    const {t} = useTranslation();

    const readonly = useSelector(getProfileReadonly);

    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(styles.ProfilePageHeader, {}, [className])}>
            <AppText title={t('Профиль')}/>
            {
                readonly
                    ? (
                        <AppButton
                            theme={ThemeButton.OUTLINE}
                            className={styles.editBtn}
                            onClick={onEdit}
                        >
                            {t('Редактировать')}
                        </AppButton>
                    ) : (
                        <>
                            <AppButton
                                theme={ThemeButton.OUTLINE_RED}
                                className={styles.editBtn}
                                onClick={onCancelEdit}
                            >
                                {t('Отменить')}
                            </AppButton>

                            <AppButton
                                theme={ThemeButton.OUTLINE}
                                className={styles.saveBtn}
                                onClick={onSave}
                            >
                                {t('Сохранить')}
                            </AppButton>
                        </>

                    )
            }
        </div>
    );
};