import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from 'entities/Profile';
import { ReducerList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { DeepPartial } from "app/types/global";
import {ReducersMapObject} from "@reduxjs/toolkit";

const defaultAsyncReducers: ReducerList = {
    login: loginReducer,
    profile: profileReducer,
};

// eslint-disable-next-line react/display-name
export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducer?:  DeepPartial<ReducersMapObject<StateSchema>>
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{...defaultAsyncReducers, ...asyncReducer}}>
        <StoryComponent/>
    </StoreProvider>
);