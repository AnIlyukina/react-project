import { userReducer, userActions } from './model/slice/userSlice';
import type { UserSchema, User } from './model/types/user';
import { UserRole } from './model/consts/consts';
import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
import { getUserInited } from './model/selectors/getUserInited/getUserInited';
import {
    isUserAdmin,
    isUserManager,
    getUserRoles,
} from './model/selectors/roleSelector';

import { useJsonSettingsByKey } from './model/selectors/jsonSettings';

export {
    userReducer,
    userActions,
    UserSchema,
    User,
    UserRole,
    getUserAuthData,
    getUserInited,
    isUserAdmin,
    isUserManager,
    getUserRoles,
    useJsonSettingsByKey,
};
