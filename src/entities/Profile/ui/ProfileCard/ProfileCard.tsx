import {classNames, Mods} from 'shared/lib/classNames/classNames';
import styles from './ProfileCard.module.scss';
import {useTranslation} from 'react-i18next';
import {AppText, TextAlign, TextTheme} from 'shared/ui/AppText/ui/AppText';
import {AppInput} from 'shared/ui/AppInput/AppInput';
import {Profile} from '../../model/types/profile';
import {Loader} from 'shared/ui/Loader/Loader';
import {Avatar} from "shared/ui/Avatar/ui/Avatar";

import {Currency} from "entities/Currency/model/types/currency";
import {CurrencySelect} from "entities/Currency";

import {Country, CountrySelect} from "entities/Country";

interface ProfileCardProps {
    className?: string,
    profileData?: Profile | null,
    error?: string,
    isLoading?: boolean,
    onChangeLastName?: (value?: string) => void,
    onChangeFirstName?: (value?: string) => void,
    onChangeAge?: (value?: string) => void,
    onChangeCity?: (value?: string) => void,
	onChangeUsername?: (value?: string) => void,
	onChangeAvatar?: (value?: string) => void,
    onChangeCurrency?: (value: Currency) => void,
    onChangeCountry?: (value: Country) => void,
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
        onChangeAge,
        onChangeCity,
		onChangeUsername,
		onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
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

    const mods: Mods = {
    	[styles.editing]: !readonly
	}

    return (
        <div className={classNames(styles.ProfileCard, mods, [className])}>
            <div className={styles.data}>
				{profileData?.avatar && (
					<div className={styles.avatarWrapper}>
						<Avatar
							src={profileData?.avatar}
							alt='аватар пользователя'
						/>
					</div>
				)}
				<AppInput
					placeholder={t('Имя пользователя')}
					value={profileData?.username}
					className={styles.input}
					onChange={onChangeUsername}
					readonly={readonly}
				/>
                <AppInput
                    placeholder={t('Введите ссылку на аватар')}
                    value={profileData?.avatar}
                    className={styles.input}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                />
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
                <AppInput
                    placeholder={t('Ваш возраст')}
                    value={profileData?.age}
                    className={styles.input}
                    onChange={onChangeAge}
                    readonly={readonly}
                />
                <AppInput
                    placeholder={t('Ваш город')}
                    value={profileData?.city}
                    className={styles.input}
                    onChange={onChangeCity}
                    readonly={readonly}
                />
                <CurrencySelect
                    className={styles.input}
                    value={profileData?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />
                <CountrySelect
                    className={styles.input}
                    value={profileData?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};