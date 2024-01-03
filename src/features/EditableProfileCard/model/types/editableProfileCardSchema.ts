import {Profile} from 'entities/Profile';
import { ValidateProfileError } from '../../model/consts/consts';

export interface ProfileScheme {
    data?: Profile | null;
    form?: Profile | null;
    isLoading: boolean;
    error?: string | null;
    readonly: boolean;
    validateErrors?: ValidateProfileError[];
}