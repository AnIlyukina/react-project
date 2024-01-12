import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/user';
import { USER_LOCAL_STORAGE_KEY } from '@/shared/const/localStorage';
import { setFeatureFlag } from '@/shared/lib/features';

const initialState: UserSchema = {
    _inited: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
            setFeatureFlag(action.payload.features);
        },

        initAuthData: (state) => {
            const user = JSON.parse(
                localStorage.getItem(USER_LOCAL_STORAGE_KEY) as string,
            );
            if (user) {
                state.authData = user;
                setFeatureFlag(user.features);
            }
            state._inited = true;
        },
        logout: (state) => {
            localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
            state.authData = undefined;
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
