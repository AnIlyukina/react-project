import {StateSchema} from '@/app/providers/StoreProvider';
import {getProfileForm} from './getProfileForm';
import {Country} from '@/entities/Country';
import {Currency} from '@/entities/Currency';

describe('getProfileForm', () => {
    test('should return form', () => {
        const form = {
            username: 'admin',
            avatar: 'https://shablon.pechenek.net/wp-content/uploads/avatarka_swordgirl.jpg',
            age: 11,
            country: Country.Russia,
            first: 'SA',
            lastname: 'sdfji',
            city: 'asas',
            currency: Currency.EUR,
        };

        const state: DeepPartial<StateSchema> = {
            profile: {
                form: form
            }
        };

        expect(getProfileForm(state as StateSchema)).toEqual(form);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileForm(state as StateSchema)).toEqual(null);
    });
});