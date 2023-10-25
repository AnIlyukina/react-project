import {classNames} from 'shared/lib/classNames/classNames';
import styles from './ProfileCard.module.scss';
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import {getProfileData} from "entities/Profile/model/selectors/getProfileData/getProfileData";
import {getProfileIsLoading} from "entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading";
import {getProfileError} from "entities/Profile/model/selectors/getProfileError/getProfileError";
import {AppText} from "shared/ui/AppText/ui/AppText";
import {AppButton, ThemeButton} from "shared/ui/AppButton/AppButton";
import {AppInput} from "shared/ui/AppInput/AppInput";

interface ProfileCardProps {
    className?: string
}
export const ProfileCard = ({className}: ProfileCardProps) => {
    const {t} = useTranslation('profile');

    const profileData = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    return (
        <div className={classNames(styles.ProfileCard, {}, [className])}>
            <div className={styles.header}>
                <AppText title={t('Профиль')}/>
                <AppButton
                    theme={ThemeButton.OUTLINE}
                    className={styles.editBtn}
                >
                    {t('Редактировать')}
                </AppButton>
            </div>

            <div className={styles.data}>
                <AppInput
                    placeholder={t('Имя')}
                    value={profileData?.first}
                    className={styles.input}
                />
                <AppInput
                    placeholder={t('Фамилия')}
                    value={profileData?.lastname}
                />
            </div>
        </div>
    );
};