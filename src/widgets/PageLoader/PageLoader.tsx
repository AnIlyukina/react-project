import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './PageLoader.module.scss';
import { Loader } from '@/shared/ui/deprecatad/Loader/Loader';

interface PageLoaderProps {
    className?: string;
}
export const PageLoader = ({ className }: PageLoaderProps) => {
    return (
        <div
            id="page-loader"
            className={classNames(styles.PageLoader, {}, [className])}
        >
            <Loader />
        </div>
    );
};
