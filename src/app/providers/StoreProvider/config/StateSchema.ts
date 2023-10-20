import {CounterScheme} from 'entities/Counter';
import {UserSchema} from 'entities/User';
import {LoginSchema} from "features/AuthByUsername/model/types/loginSchema";

export interface StateSchema {
    counter: CounterScheme;
    user: UserSchema;
    login: LoginSchema;
}