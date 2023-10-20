import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import {User} from "entities/User";

interface LoginByUsernameProps {
    username: string,
    password: string,
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, {rejectValue : string}>(
    'login/loginByUsername',
    async (authData, thunkApi) => {
        try {
            const response = await axios.post('http://localhost:8080/login', authData)
            if (!response.data) {
                throw new Error('error');
            }

            return response.data
        } catch (e) {
            return thunkApi.rejectWithValue('error')
        }
    }
)