import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _energyType: EnergyType;
  static count = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer.count += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.count;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}
export default Necromancer;
