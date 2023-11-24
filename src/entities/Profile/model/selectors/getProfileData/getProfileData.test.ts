import {StateSchema} from 'app/providers/StoreProvider';
import {getProfileData} from './getProfileData';
import {Country} from "entities/Country";
import {Currency} from "entities/Currency";

describe('getProfileData', () => {
    test('should return profileData', () => {
        const data = {
            username: 'admin',
            avatar: 'https://shablon.pechenek.net/wp-content/uploads/avatarka_swordgirl.jpg',
            age: 11,
            country: Country.Russia,
            first: 'SA',
            lastname: 'sdfji',
            city: 'asas',
            currency: Currency.EUR,
        }

        const state: DeepPartial<StateSchema> = {
            profile: {
                data: data
            }
        };

        expect(getProfileData(state as StateSchema)).toEqual(data);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileData(state as StateSchema)).toEqual(null);
    });
});