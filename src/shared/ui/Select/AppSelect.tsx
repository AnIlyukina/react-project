import {classNames, Mods} from 'shared/lib/classNames/classNames';
import styles from './AppSelect.module.scss';

interface SelectProps {
    className?: string,
	label?: string
}
export const AppSelect = (props: SelectProps) => {
	const {
		className, label,
	} = props;

	const mods: Mods = {
		//[styles.]
	}
    return (
        <div className={classNames(styles.Wrapper, mods, [className])}>
			{label && (
				<span className={styles.label}>
					{`${label}>`}
				</span>
			)}
			<select className={styles.select}>
				<option className={styles.option}>123</option>
				<option className={styles.option}>123</option>
			</select>
        </div>
    );
};