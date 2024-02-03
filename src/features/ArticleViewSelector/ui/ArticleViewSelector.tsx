import {memo} from 'react';
import styles from './ArticleViewSelector.module.scss';
import ListIconDeprecated from '@/shared/assets/icon/list-24-24.svg?react';
import TiledIconDeprecated from '@/shared/assets/icon/tiled-24-24.svg?react';

import ListIcon from '@/shared/assets/icon/burger.svg?react';
import TiledIcon from '@/shared/assets/icon/tile.svg?react';
import {ArticleView} from '@/entities/Article';
import {toggleFeatures} from '@/shared/lib/features';
import {ToggleFeatures} from '@/shared/lib/features/ToggleFeatures/ToggleFeatures';
import {classNames} from '@/shared/lib/classNames/classNames';
import {AppButton as AppButtonDeprecated, ThemeButton} from '@/shared/ui/deprecatad/AppButton/AppButton';
import {Icon as IconDeprecated} from '@/shared/ui/deprecatad/Icon/Icon';
import {Icon} from '@/shared/ui/redesigned/Icon/Icon';
import {Card} from '@/shared/ui/redesigned/Card/Card';
import {HStack} from '@/shared/ui/redesigned/Stack';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => TiledIcon,
            off: () => TiledIconDeprecated
        }),
    },
    {
        view: ArticleView.BIG,
        icon: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => ListIcon,
            off: () => ListIconDeprecated
        }),
    },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const {className, view, onViewClick} = props;

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <Card
                    className={classNames(styles.ArticleViewSelectorRedesigned, {}, [className])}
                    border='round'
                >
                    <HStack gap={'8'}>
                        {viewTypes.map((viewType) => (
                            <Icon
                                clickable
                                onClick={onClick(viewType.view)}
                                key={viewType.view}
                                Svg={viewType.icon}
                                className={classNames('', {
                                    [styles.notSelected]: viewType.view !== view,
                                })}
                            />
                        ))}
                    </HStack>
                </Card>
            }
            off={
                <div
                    className={classNames(styles.ArticleViewSelector, {}, [className])}
                >
                    {viewTypes.map((viewType) => (
                        <AppButtonDeprecated
                            key={viewType.view}
                            theme={ThemeButton.CLEAR}
                            onClick={onClick(viewType.view)}
                        >
                            <IconDeprecated
                                Svg={viewType.icon}
                                className={classNames('', {
                                    [styles.notSelected]: viewType.view !== view,
                                })}
                            />
                        </AppButtonDeprecated>
                    ))}
                </div>
            }
        />
    );
});

ArticleViewSelector.displayName = 'ArticleViewSelector';
