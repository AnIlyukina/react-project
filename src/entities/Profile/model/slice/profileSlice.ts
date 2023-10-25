import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Profile, ProfileScheme} from '../types/profile';

const initialState: ProfileScheme = {
    readonly: true,
    isLoading: false,
    error: null,
    data: null,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;