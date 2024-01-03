import {UserSchema} from 'entities/User';
import {LoginSchema} from 'features/AuthByUsername/model/types/loginSchema';
import {AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {To} from 'history';
import {NavigateOptions} from 'react-router';
import {ArticleDetailsSchema} from 'entities/Article';
import { ArticlesPageSchema } from 'pages/ArticlesPage';
import { UISchema } from 'features/UI';
import { AddCommentFormSchema } from 'features/addCommentForm';
import {
    ArticleDetailsPageSchema,
} from 'pages/ArticleDetailsPage';
import { rtkApi } from 'shared/api/rtkApi';
import {ProfileScheme} from 'features/EditableProfileCard';


export interface StateSchema {
    user: UserSchema;
    ui: UISchema;
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>

    // Асинхронные редюсеры
    login?: LoginSchema;
    profile?: ProfileScheme;
    articleDetails?: ArticleDetailsSchema;
    addCommentForm?: AddCommentFormSchema;
    articlesPage?: ArticlesPageSchema;
    articleDetailsPage?: ArticleDetailsPageSchema;
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