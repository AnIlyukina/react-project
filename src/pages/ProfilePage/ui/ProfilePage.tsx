import {classNames} from 'shared/lib/classNames/classNames';
import {VStack} from 'shared/ui/Stack/VStack/VStack';
import {useTranslation} from 'react-i18next';
import {EditableProfileCard} from "features/editableProfileCard";
import {useParams} from "react-router-dom";
import {AppText} from "shared/ui/AppText/ui/AppText";

interface ProfilePageProps {
    className?: string
}

const ProfilePage = ({className}: ProfilePageProps) => {
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return (
            <AppText text={t('Профиль не найден')}/>
        )
    }

    return (
        <div
            className={classNames('', {}, [className])}
        >
            <VStack max gap='16'>
                <EditableProfileCard id={id}/>
            </VStack>
        </div>
    );
};

export default ProfilePage;