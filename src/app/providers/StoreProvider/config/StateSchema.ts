import {CounterScheme} from 'entities/Counter';
import {UserSchema} from 'entities/User';
import {LoginSchema} from 'features/AuthByUsername/model/types/loginSchema';
import {AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject} from '@reduxjs/toolkit';
import {ProfileScheme} from 'entities/Profile';
import {AxiosInstance} from 'axios';
import {To} from 'history';
import {NavigateOptions} from 'react-router';
import {ArticleDetailsSchema} from 'entities/Article';

export interface StateSchema {
    counter: CounterScheme;
    user: UserSchema;

    // Асинхронные редюсеры
    login?: LoginSchema;
    profile?: ProfileScheme;
    articleDetails?: ArticleDetailsSchema;
}

export type StateSchemaKey = keyof StateSchema

export interface reducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>,
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>,
    add: (key: StateSchemaKey, reducer: Reducer) => void,
    remove: (key: StateSchemaKey) => void,
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: reducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance,
    navigate?: (to: To, options?: NavigateOptions) => void,
}

export interface ThunkConfig<T> {
    rejectValue : T,
    extra: ThunkExtraArg,
    state: StateSchema,
}