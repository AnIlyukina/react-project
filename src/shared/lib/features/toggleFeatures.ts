import { FeaturesFlags } from '@/shared/types/featuresFlags';
import { getFeatureFlag } from './setGetFeatures';

interface ToggleFeaturesOptions<T> {
    name: keyof FeaturesFlags;
    on: () => T;
    off: () => T;
}

export function toggleFeatures<T>({
    off,
    on,
    name,
}: ToggleFeaturesOptions<T>): T {
    if (getFeatureFlag(name)) {
        return on();
    }

    return off();
}
