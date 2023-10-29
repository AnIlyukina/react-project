import { Profile, ProfileScheme} from './model/types/profile';
import { profileActions, profileReducer} from './model/slice/profileSlice';
import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
import { ProfileCard } from './ui/ProfileCard/ProfileCard';
import { getProfileData } from './model/selectors/getProfileData/getProfileData';
import { getProfileError } from './model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from './model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadonly } from './model/selectors/getProfileReadonly/getProfileReadonly';

export {
    Profile,
    ProfileScheme,
    profileActions,
    profileReducer,
    fetchProfileData,
    ProfileCard,
    getProfileData,
    getProfileError,
    getProfileIsLoading,
    getProfileReadonly
};