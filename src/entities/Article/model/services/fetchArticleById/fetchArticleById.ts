import { createAsyncThunk } from '@reduxjs/toolkit';
import {ThunkConfig} from 'app/providers/StoreProvider';
import {Article} from '../../types/article';

export const fetchArticleById = createAsyncThunk<
    Article,
    string,
    ThunkConfig<string>
>(
    'articleDetails/fetchArticleById',
    async ( articleId, thunkApi) => {

        const { extra, rejectWithValue } = thunkApi;

        try {
            const response = await extra.api.get<Article>(`/articles/${articleId}`,  {
                params: {
                    _expand: 'user',
                },
            });
            return response.data;
        } catch (e) {
            return rejectWithValue('Вы ввели неверный логин или пароль');
        }
    }
);