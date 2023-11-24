import {classNames} from 'shared/lib/classNames/classNames';
import styles from './Code.module.scss';
import {memo, ReactNode, useCallback} from 'react';
import {AppButton} from "shared/ui/AppButton/AppButton";
interface CodeProps {
    className?: string;
    children: string;
}

export const Code = memo((props: CodeProps) => {

    const {className, children} = props;

    const onCopy = useCallback(() => {

    }, [])

    return (
        <pre className={classNames(styles.Code, {}, [className])}>
            <AppButton className={styles.copyBtn}>Копировать</AppButton>
            <code>
                { children }
            </code>
        </pre>
    );
});
Code.displayName = 'Code'