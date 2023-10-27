import {LoginSchema} from '../types/loginSchema';
import {loginActions, loginReducer} from '../../model/slice/loginSlice';
import {DeepPartial} from 'app/types/global';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: '123' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUserName('123123'),
        )).toEqual({ username: '123123'});
    });

    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '123' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword('qwe'),
        )).toEqual({ password: 'qwe'});
    });
});