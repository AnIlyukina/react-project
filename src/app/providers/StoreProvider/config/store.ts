import {CombinedState, configureStore, ReducersMapObject} from '@reduxjs/toolkit';
import {StateSchema} from './StateSchema';
import { counterReducer } from 'entities/Counter';
import {userReducer} from 'entities/User';
import {createReducerManager} from './reducerManager';
import {$api} from 'shared/api/api';
import {To} from 'history';
import {NavigateOptions} from 'react-router';

// Оборачиваем в функцию для переиспользования, например в storybook
export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    navigate?: (to: To, options?: NavigateOptions) => void,
) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducer);

    const store = configureStore({
        //@ts-ignore
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api,
                    navigate,
                }
            }
        })
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']