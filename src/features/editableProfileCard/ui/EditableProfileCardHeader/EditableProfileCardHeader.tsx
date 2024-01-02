import {classNames} from 'shared/lib/classNames/classNames';
import {memo, useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {getProfileReadonly} from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {getUserAuthData} from 'entities/User';
import {getProfileData} from '../../model/selectors/getProfileData/getProfileData';
import {profileActions} from '../../model/slice/editableProfileCard';
import {updateProfileData} from '../../model/services/updateProfileData/updateProfileData';
import {HStack} from 'shared/ui/Stack';
import {AppText} from 'shared/ui/AppText/ui/AppText';
import {AppButton, ThemeButton} from 'shared/ui/AppButton/AppButton';

interface EditableProfileCardHeaderProps {
    className?: string
}

export const EditableProfileCardHeader = memo((props: EditableProfileCardHeaderProps) => {

    const { className } = props;

    const {t} = useTranslation();

    const readonly = useSelector(getProfileReadonly);

    const dispatch = useAppDispatch();

    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;


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
        <HStack justify='between' max={true} className={classNames('', {}, [className])}>
            <AppText title={t('Профиль')}/>
            {canEdit && (
                <div>
                    {
                        readonly
                            ? (
                                <AppButton
                                    theme={ThemeButton.OUTLINE}
                                    onClick={onEdit}
                                    data-testid="EditableProfileCardHeader.EditButton"
                                >
                                    {t('Редактировать')}
                                </AppButton>
                            ) : (
                                <HStack gap='8'>
                                    <AppButton
                                        theme={ThemeButton.OUTLINE_RED}
                                        onClick={onCancelEdit}
                                        data-testid="EditableProfileCardHeader.CancelButton"
                                    >
                                        {t('Отменить')}
                                    </AppButton>

                                    <AppButton
                                        theme={ThemeButton.OUTLINE}
                                        onClick={onSave}
                                        data-testid="EditableProfileCardHeader.SaveButton"
                                    >
                                        {t('Сохранить')}
                                    </AppButton>
                                </HStack>
                            )
                    }
                </div>
            )}
        </HStack>
    );
});
EditableProfileCardHeader.displayName = 'EditableProfileCardHeader';