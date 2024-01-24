import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './Code.module.scss';
import { memo } from 'react';
import { AppButton } from '@/shared/ui/deprecatad/AppButton/AppButton';
import { useTranslation } from 'react-i18next';
interface CodeProps {
    className?: string;
    children: string;
}

/**
 * @deprecated
 */

export const Code = memo((props: CodeProps) => {
    const { className, children } = props;
    const { t } = useTranslation();

    // const onCopy = useCallback(() => {
    //
    // }, []);

    return (
        <pre className={classNames(styles.Code, {}, [className])}>
            <AppButton className={styles.copyBtn}>{t('Копировать')}</AppButton>
            <code>{children}</code>
        </pre>
    );
});
Code.displayName = 'Code';
