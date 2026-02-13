import { CharacteristicValue, Service } from 'homebridge';
import { SupportedActionsType } from '../domain/alexa';
import BaseAccessory from './base-accessory';
export default class FanAccessory extends BaseAccessory {
    static requiredOperations: SupportedActionsType[];
    service: Service;
    isExternalAccessory: boolean;
    configureServices(): void;
    handleActiveGet(): Promise<boolean>;
    handleActiveSet(value: CharacteristicValue): Promise<void>;
}
//# sourceMappingURL=fan-accessory.d.ts.map