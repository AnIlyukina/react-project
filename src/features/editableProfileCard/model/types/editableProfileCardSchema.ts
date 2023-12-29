import {Profile} from "entities/Profile";

export interface ProfileScheme {
    data?: Profile | null;
    form?: Profile | null;
    isLoading: boolean;
    error?: string | null;
    readonly: boolean;
    validateErrors?: ValidateProfileError[];
}

export enum ValidateProfileError {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_COUNTRY='INCORRECT_COUNTRY',
    NO_DATA='NO_DATA',
    SERVER_ERROR='SERVER_ERROR'
}