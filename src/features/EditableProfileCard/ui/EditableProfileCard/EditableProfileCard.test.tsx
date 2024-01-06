import {screen} from '@testing-library/react';
import {EditableProfileCard} from './EditableProfileCard';
import {componentRender} from '@/shared/lib/tests/componentRender/componentRender';
import {Profile} from '@/entities/Profile';
import {Currency} from '@/entities/Currency';
import {Country} from '@/entities/Country';
import {profileReducer} from '../../model/slice/editableProfileCard';
import {userEvent} from '@testing-library/user-event';
import {$api} from '@/shared/api/api';

const profile: Profile = {
    id: '1',
    first: 'admin',
    lastname: 'admin',
    age: 25,
    currency: Currency.USD,
    country: Country.Russia,
    city: 'Moscow',
    username: 'admin123'
};

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
        },
        user: {
            authData: {
                id: '1',
                username: 'admin',
            }
        }
    },
    asyncReducers: {
        profile: profileReducer,
    }
};
describe('features/EditableProfileCard',  () => {
    test('режим readonly to be false', async () => {
        componentRender(<EditableProfileCard id='1'/>, options);

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument();
    });

    test('при отмене значения должны обнуляться', async () => {
        componentRender(<EditableProfileCard id='1'/>, options);

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.first'));
        await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));

        await userEvent.type(screen.getByTestId('ProfileCard.first'), 'user');
        await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'user');

        expect(screen.getByTestId('ProfileCard.first')).toHaveValue('user');
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('user');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'));

        expect(screen.getByTestId('ProfileCard.first')).toHaveValue('admin');
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('admin');
    });

    test('должна появиться ошибка', async () => {
        componentRender(<EditableProfileCard id='1'/>, options);

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.username'));

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
    });

    test('Если нет ошибок валиции то на сервер должен уйти Put запрос', async () => {
        componentRender(<EditableProfileCard id='1'/>, options);

        const mockPutRequest = jest.spyOn($api, 'put');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'user');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

        expect(mockPutRequest).toHaveBeenCalled();
    });

});