import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';

const AboutPage = () => {
    const { t } = useTranslation('aboutPage');
    return <Page data-testid="AboutPage">{t('О сайте')}</Page>;
};

export default AboutPage;
