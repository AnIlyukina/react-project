import {fetchProfileData} from './fetchProfileData';
import {TestAsyncThunk} from 'shared/lib/tests/testAsyncThunk/testAsyncThunk';
import {Country} from "entities/Country";
import {Currency} from "entities/Currency";

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

describe('fetchProfileData.test', () => {
    test('success', async () => {

        const userValue = { username: '123', id: '1'};

        const thunk = new TestAsyncThunk(fetchProfileData);

        thunk.api.get.mockReturnValue(Promise.resolve({data: data}));
        const result = await thunk.callThunk();

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({status: 403}));
        const result = await thunk.callThunk();
        expect(result.meta.requestStatus).toBe('rejected');
    });
});