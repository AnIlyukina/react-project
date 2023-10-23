import {configureStore, ReducersMapObject} from '@reduxjs/toolkit';
import {StateSchema} from './StateSchema';
import { counterReducer } from 'entities/Counter';
import {userReducer} from 'entities/User';
import {createReducerManager} from './reducerManager';

// Оборачиваем в функцию для переиспользования, например в storybook
export function createReduxStore(initialState?: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducer);

    const store = configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}
