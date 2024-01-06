import {classNames} from '@/shared/lib/classNames/classNames';
import styles from './NotificationList.module.scss';
import {useNotifications} from '@/entities/Notification/api/notificationApi';
import {VStack} from '@/shared/ui/Stack';
import {NotificationItem} from '../../ui/NotificationItem/NotificationItem';
import {Skeleton} from '@/shared/ui/Skeleton/Skeleton';

interface NotificationListProps {
    className?: string
}

export const NotificationList = ({className}: NotificationListProps) => {
    const { data, isLoading } = useNotifications(null, {
        pollingInterval: 5000,
    });

    if (isLoading) {
        return (
            <VStack gap='16' max className={classNames(styles.NotificationList, {}, [className])}>
                <Skeleton width={500} height={80}  border='8px'/>
                <Skeleton width={500} height={80}  border='8px'/>
                <Skeleton width={500} height={80}  border='8px'/>
            </VStack>
        );
    }
    return (
        <VStack gap='16' max className={classNames(styles.NotificationList, {}, [className])}>
            {
                data?.map((item) => (
                    <NotificationItem key={item.id} item={item}/>
                ))
            }
        </VStack>
    );
};