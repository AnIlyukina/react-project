import { FeaturesFlags } from '@/shared/types/featuresFlags';

let featuresFlag: FeaturesFlags = {};

export function setFeatureFlag(newFeatureFlag?: FeaturesFlags) {
    if (newFeatureFlag) {
        featuresFlag = newFeatureFlag;
    }
}

export function getFeatureFlag(flag: keyof FeaturesFlags) {
    return featuresFlag?.[flag];
}
