import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {AppText} from 'shared/ui/AppText/ui/AppText';
import {AppButton, ThemeButton} from 'shared/ui/AppButton/AppButton';
import { useSelector} from 'react-redux';
import {getProfileReadonly, profileActions, updateProfileData} from 'entities/Profile';
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';
import {HStack} from "shared/ui/Stack/HStack/HStack";

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
        <HStack justify='between' max={true} className={classNames('', {}, [className])}>
            <AppText title={t('Профиль')}/>
            {
                readonly
                    ? (
                        <AppButton
                            theme={ThemeButton.OUTLINE}
                            onClick={onEdit}
                        >
                            {t('Редактировать')}
                        </AppButton>
                    ) : (
                        <HStack gap='8'>
                            <AppButton
                                theme={ThemeButton.OUTLINE_RED}
                                onClick={onCancelEdit}
                            >
                                {t('Отменить')}
                            </AppButton>

                            <AppButton
                                theme={ThemeButton.OUTLINE}
                                onClick={onSave}
                            >
                                {t('Сохранить')}
                            </AppButton>
                        </HStack>

                    )
            }
        </HStack>
    );
};