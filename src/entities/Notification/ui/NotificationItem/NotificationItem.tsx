import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './NotificationItem.module.scss';
import { Notification } from '../../model/types/notification';
import { Card as CardDeprecatad, CardTheme } from '@/shared/ui/deprecatad/Card/Card';
import { AppText as AppTextDeprecatad } from '@/shared/ui/deprecatad/AppText/ui/AppText';
import {ToggleFeatures} from '@/shared/lib/features/ToggleFeatures/ToggleFeatures';
import {Card} from '@/shared/ui/redesigned/Card/Card';
import {AppText} from '@/shared/ui/redesigned/AppText/ui/AppText';

interface NotificationItemProps {
    className?: string;
    item: Notification;
}

export const NotificationItem = (props: NotificationItemProps) => {
    const { className, item } = props;

    const content = (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <Card
                    className={classNames(styles.NotificationItem, {}, [className])}
                >
                    <AppText title={item.title} text={item.descriptions} />
                </Card>
            }
            off={
                <CardDeprecatad
                    theme={CardTheme.OUTLINED}
                    className={classNames(styles.NotificationItem, {}, [className])}
                >
                    <AppTextDeprecatad title={item.title} text={item.descriptions} />
                </CardDeprecatad>
            }
        />
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
