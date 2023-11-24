import {validateProfileData} from './validateProfileData';
import {Country} from "entities/Country";
import {Currency} from "entities/Currency";
import {ValidateProfileError} from "entities/Profile";

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

describe('validateProfileData.test', () => {
    test('success', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([])


    });

    test('without first and lastname', async () => {
       const result = validateProfileData({...data, first: '', lastname: ''});

       expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
    });

    test('incorrect age', async () => {
        const result = validateProfileData({...data, age: undefined});

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE])
    });

    test('without country', async () => {
        const result = validateProfileData({...data, country: undefined});

        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY])
    });

    test('incorrect all', async () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ])
    });
});