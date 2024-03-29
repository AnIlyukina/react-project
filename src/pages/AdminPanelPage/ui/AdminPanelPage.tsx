import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';

const AdminPanelPage = () => {
    const { t } = useTranslation('adminPanel');
    return <Page>{t('Панель администратора')}</Page>;
};

export default AdminPanelPage;
