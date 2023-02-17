import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _energyType: EnergyType;
  static count = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage.count += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage.count;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}
export default Mage;