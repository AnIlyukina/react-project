import {CombinedState, configureStore, ReducersMapObject} from '@reduxjs/toolkit';
import {StateSchema} from './StateSchema';
import { userReducer } from 'entities/User';
import { uiReducer } from 'features/UI';
import {createReducerManager} from './reducerManager';
import {$api} from 'shared/api/api';
import {To} from 'history';
import {NavigateOptions} from 'react-router';
import {rtkApi} from "shared/api/rtkApi";

// Оборачиваем в функцию для переиспользования, например в storybook
export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    navigate?: (to: To, options?: NavigateOptions) => void,
) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: userReducer,
        ui: uiReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
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
        }).concat(rtkApi.middleware)
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']