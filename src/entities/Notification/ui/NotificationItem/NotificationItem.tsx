import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './NotificationItem.module.scss';
import { Notification } from '../../model/types/notification';
import { Card, CardTheme } from '@/shared/ui/Card/Card';
import { AppText } from '@/shared/ui/AppText/ui/AppText';

interface NotificationItemProps {
    className?: string;
    item: Notification;
}

export const NotificationItem = (props: NotificationItemProps) => {
    const { className, item } = props;

    const content = (
        <Card
            theme={CardTheme.OUTLINED}
            className={classNames(styles.NotificationItem, {}, [className])}
        >
            <AppText title={item.title} text={item.descriptions} />
        </Card>
    );

    if (item.href) {
        return (
            <a
                className={styles.link}
                target="_blank"
                href={item.href}
                rel="noreferrer"
            >
                {content}
            </a>
        );
    }

    return content;
};
