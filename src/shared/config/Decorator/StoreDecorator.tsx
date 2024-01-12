import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { loginReducer } from '@/features/AuthByUsername/model/slice/loginSlice';
import { ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { profileReducer } from '@/features/EditableProfileCard/model/slice/editableProfileCard';
import { articleDetailsReducer } from '@/entities/Article/model/slice/articleDetailsSlice';
import { addCommentFormReducer } from '@/features/addCommentForm/model/slices/addCommentFormSlice';
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/model/slices';

const defaultAsyncReducers: ReducerList = {
    login: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsPageReducer,
};

// eslint-disable-next-line react/display-name
export const StoreDecorator =
    (
        state: DeepPartial<StateSchema>,
        asyncReducer?: DeepPartial<ReducersMapObject<StateSchema>>,
        // eslint-disable-next-line react/display-name
    ) =>
    (StoryComponent: Story) => (
        <StoreProvider
            initialState={state}
            asyncReducers={{ ...defaultAsyncReducers, ...asyncReducer }}
        >
            <StoryComponent />
        </StoreProvider>
    );
