import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {ReducersMapObject} from '@reduxjs/toolkit';
import {profileReducer} from "features/editableProfileCard/model/slice/editableProfileCard";

const defaultAsyncReducers: ReducerList = {
    login: loginReducer,
    profile: profileReducer,
};

// eslint-disable-next-line react/display-name
export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducer?:  DeepPartial<ReducersMapObject<StateSchema>>
    // eslint-disable-next-line react/display-name
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{...defaultAsyncReducers, ...asyncReducer}}>
        <StoryComponent/>
    </StoreProvider>
);
