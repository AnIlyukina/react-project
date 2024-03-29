import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './StarRating.module.scss';
import { Icon } from '@/shared/ui/deprecatad/Icon/Icon';
import StarIcon from '@/shared/assets/icon/star.svg?react';
import { useState } from 'react';

interface StarRatingProps {
    className?: string;
    onSelect?: (starsCount: number) => void;
    size?: number;
    selectedStar?: number;
}

const star = [1, 2, 3, 4, 5];

/**
 * @deprecated
 */

export const StarRating = (props: StarRatingProps) => {
    const { className, onSelect, size = 30, selectedStar = 0 } = props;

    const [currentStarNumber, setCurrentStarNumber] = useState(selectedStar);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStar));

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStarNumber(starsCount);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarNumber(0);
        }
    };

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount);
            setCurrentStarNumber(starsCount);
            setIsSelected(true);
        }
    };

    return (
        <div className={classNames(styles.StarRating, {}, [className])}>
            {star.map((starNumber) => (
                <Icon
                    className={classNames(
                        styles.StarRating,
                        { [styles.selected]: isSelected },
                        [
                            currentStarNumber >= starNumber
                                ? styles.hovered
                                : styles.normal,
                        ],
                    )}
                    Svg={StarIcon}
                    key={starNumber}
                    width={size}
                    height={size}
                    onMouseEnter={onHover(starNumber)}
                    onMouseLeave={onLeave}
                    onClick={onClick(starNumber)}
                />
            ))}
        </div>
    );
};
