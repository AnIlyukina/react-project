import {profileReducer, profileActions} from './editableProfileCard';
import {Country} from '@/entities/Country';
import {Currency} from '@/entities/Currency';
import {ProfileScheme} from '../types/editableProfileCardSchema';

import {updateProfileData} from '../services/updateProfileData/updateProfileData';
import {ValidateProfileError} from '../consts/consts';

const data = {
    username: 'admin',
    avatar: 'https://shablon.pechenek.net/wp-content/uploads/avatarka_swordgirl.jpg',
    age: 11,
    country: Country.Russia,
    first: 'SA',
    lastname: 'sdfji',
    city: 'asas',
    currency: Currency.EUR,
};
describe('EditableProfileCard.test', () => {
    test('test setReadonly', () => {
        const state: DeepPartial<ProfileScheme> = { readonly: false };
        expect(profileReducer(
            state as ProfileScheme,
            profileActions.setReadonly(true),
        )).toEqual({ readonly: true});
    });

    test('test cancelEdit', () => {
        const state: DeepPartial<ProfileScheme> = { data, form: { username: ''} };
        expect(profileReducer(
            state as ProfileScheme,
            profileActions.cancelEdit(),
        )).toEqual({
            readonly: true,
            validateError: undefined,
            data,
            form: data
        });
    });

    test('test updateProfile', () => {
        const state: DeepPartial<ProfileScheme> = {};
        expect(profileReducer(
            state as ProfileScheme,
            profileActions.updateProfile({ first: 'Анна'}),
        )).toEqual({
            form: { first: 'Анна'}
        });
    });

    test('test updateProfile service pending', () => {
        const state: DeepPartial<ProfileScheme> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR]
        };
        expect(profileReducer(
            state as ProfileScheme,
            updateProfileData.pending
        )).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });

    test('test updateProfile service fulfilled', () => {
        const state: DeepPartial<ProfileScheme> = {
            isLoading: true,
        };
        expect(profileReducer(
            state as ProfileScheme,
            updateProfileData.fulfilled(data, '')
        )).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readonly: true,
            data,
            form: data,
        });
    });

});