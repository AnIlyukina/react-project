import { Story } from '@storybook/react';
import {StateSchema, StoreProvider} from 'app/providers/StoreProvider';
import {DeepPartial, ReducersMapObject} from '@reduxjs/toolkit';
import {loginReducer} from "features/AuthByUsername/model/slice/loginSlice";

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    login: loginReducer
}

// eslint-disable-next-line react/display-name
export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducer?:  DeepPartial<ReducersMapObject<StateSchema>>
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{...defaultAsyncReducers, ...asyncReducer}}>
        <StoryComponent/>
    </StoreProvider>
);