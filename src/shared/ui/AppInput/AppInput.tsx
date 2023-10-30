import {classNames, Mods} from 'shared/lib/classNames/classNames';
import styles from './AppInput.module.scss';
import React, {InputHTMLAttributes, memo, useEffect, useRef, useState} from 'react';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>
interface AppInputProps extends HTMLInputProps {
    className?: string,
    value?: string | number,
    onChange?: (value: string) => void,
    type?: string,
    placeholder: string,
    autofocus? : boolean,
    readonly?: boolean,
}

export const AppInput = memo((props: AppInputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        readonly,
        ...others
    } = props;

    const ref = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    useEffect(() => {
        if (autofocus) {
            ref.current?.focus();
            setIsFocused(true);
        }
    }, [autofocus]);

    const isCaretVisible = isFocused && !readonly;


    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value);
        setCaretPosition(event.target.value.length);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    //eslint-disable-next-line
    const onSelect = (event: any) => {
        setCaretPosition(event.target.selectionStart);
    };

    const mods: Mods = {
        [styles.readonly]: readonly,
    };

    return (
        <div className={classNames(styles.AppInput, mods, [className])}>
            {placeholder && (
                <div className={styles.placeholder}>
                    {`${placeholder}>`}
                </div>)}
            <div className={styles.caretWrapper}>
                <input
                    ref={ref}
                    className={styles.input}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    readOnly={readonly}
                    {...others}
                />
                {isCaretVisible && (
                    <span
                        className={styles.caret}
                        style={{left: `${caretPosition * 9}px`}}
                    />
                )}
            </div>
        </div>
    );
});

AppInput.displayName = 'AppInput';