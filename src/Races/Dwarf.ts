import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  static count = 0;

  constructor(name: string, dexterity: number, maxLifePoints = 80) {
    super(name, dexterity);
    this._maxLifePoints = maxLifePoints;
    Dwarf.count += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  set maxLifePoints(value: number) {
    this._maxLifePoints = value;
  }

  static createdRacesInstances(): number {
    return Dwarf.count;
  }
}

export default Dwarf;
