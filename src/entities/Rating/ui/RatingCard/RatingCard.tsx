import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './RatingCard.module.scss';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { Card } from '@/shared/ui/deprecatad/Card/Card';
import { HStack, VStack } from '@/shared/ui/deprecatad/Stack';
import { AppText } from '@/shared/ui/deprecatad/AppText/ui/AppText';
import { StarRating } from '@/shared/ui/deprecatad/StarRating/StarRating';
import { Modal } from '@/shared/ui/deprecatad/Modal/Modal';
import { AppInput } from '@/shared/ui/deprecatad/AppInput/AppInput';
import {
    AppButton,
    ButtonSize,
    ThemeButton,
} from '@/shared/ui/deprecatad/AppButton/AppButton';
import { BrowserView, MobileView } from 'react-device-detect';
import { Drawer } from '@/shared/ui/deprecatad/Drawer/Drawer';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
    const { t } = useTranslation();
    const {
        className,
        title,
        feedbackTitle,
        hasFeedback,
        onAccept,
        onCancel,
        rate = 0,
    } = props;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeebdack] = useState('');

    const onSelectStars = useCallback(
        (selectedStarsCount: number) => {
            setStarsCount(selectedStarsCount);
            if (hasFeedback) {
                setIsModalOpen(true);
            } else {
                onAccept?.(selectedStarsCount);
            }
        },
        [hasFeedback, onAccept],
    );

    const acceptHandle = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const cancelHandle = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const modalContent = (
        <>
            <AppText title={feedbackTitle} />
            <AppInput
                placeholder={t('Выш отзыв')}
                value={feedback}
                onChange={setFeebdack}
            />
        </>
    );

    return (
        <Card
            fullWidth
            className={classNames(styles.RatingCard, {}, [className])}
        >
            <VStack max align="center" gap="8">
                <AppText title={starsCount ? t('Спасибо за оценку!') : title} />
                <StarRating
                    selectedStar={starsCount}
                    size={40}
                    onSelect={onSelectStars}
                />
            </VStack>
            <BrowserView>
                <Modal isOpen={isModalOpen} lazy>
                    <VStack max gap="32">
                        {modalContent}
                        <HStack max gap="16" justify="end">
                            <AppButton
                                theme={ThemeButton.OUTLINE_RED}
                                onClick={cancelHandle}
                            >
                                {t('Закрыть')}
                            </AppButton>

                            <AppButton onClick={acceptHandle}>
                                {t('Отправить')}
                            </AppButton>
                        </HStack>
                    </VStack>
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer isOpen={isModalOpen} lazy onClose={cancelHandle}>
                    <VStack gap="32">
                        {modalContent}
                        <AppButton
                            fullWidth
                            onClick={acceptHandle}
                            size={ButtonSize.L}
                        >
                            {t('Отправить')}
                        </AppButton>
                    </VStack>
                </Drawer>
            </MobileView>
        </Card>
    );
});

RatingCard.displayName = 'RatingCard';
