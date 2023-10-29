import {classNames} from 'shared/lib/classNames/classNames';
import styles from './ProfileCard.module.scss';
import {useTranslation} from 'react-i18next';
import {AppText, TextAlign, TextTheme} from 'shared/ui/AppText/ui/AppText';
import {AppInput} from 'shared/ui/AppInput/AppInput';
import {Profile} from '../../model/types/profile';
import {Loader} from 'shared/ui/Loader/Loader';

interface ProfileCardProps {
    className?: string,
    profileData?: Profile | null,
    error?: string,
    isLoading?: boolean,
    onChangeLastName: (value?: string) => void,
    onChangeFirstName: (value?: string) => void,
    readonly?: boolean,

}
export const ProfileCard = (props: ProfileCardProps) => {

    const {
        className,
        profileData,
        error,
        isLoading,
        onChangeFirstName,
        onChangeLastName,
        readonly,

    } = props;

    const {t} = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={classNames(styles.ProfileCard, {}, [className, styles.loading])}>
                <Loader/>
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(styles.ProfileCard, {}, [className, styles.error])}>
                <AppText
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте переобновить страницу')}
                />
            </div>
        );
    }

    return (
        <div className={classNames(styles.ProfileCard, {}, [className])}>
            <div className={styles.data}>
                <AppInput
                    placeholder={t('Имя')}
                    value={profileData?.first}
                    className={styles.input}
                    onChange={onChangeFirstName}
                    readonly={readonly}
                />
                <AppInput
                    placeholder={t('Фамилия')}
                    value={profileData?.lastname}
                    className={styles.input}
                    onChange={onChangeLastName}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};