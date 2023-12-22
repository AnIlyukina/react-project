import {useTranslation} from 'react-i18next';
import {HStack} from "shared/ui/Stack";
import {ListBox} from "shared/ui/ListBox/ListBox";
import {Page} from "widgets/Page/Page";

const MainPage = () =>  {
    const { t } = useTranslation('mainPage');

    return (
        <Page>
            {t('Главная страница')}
        </Page>
    );
};

export default MainPage;