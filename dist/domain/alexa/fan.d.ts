import { CapabilityState, SupportedFeatures } from './index';
export interface FanState {
    featureName: keyof typeof FanFeatures & keyof typeof SupportedFeatures;
    value: CapabilityState['value'];
}
export declare const FanFeatures: {
    readonly power: "power";
};
//# sourceMappingURL=fan.d.ts.map