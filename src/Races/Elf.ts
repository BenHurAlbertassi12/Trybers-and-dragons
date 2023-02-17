import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  static count = 0;

  constructor(name: string, dexterity: number, maxLifePoints = 99) {
    super(name, dexterity);
    this._maxLifePoints = maxLifePoints;
    Elf.count += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  set maxLifePoints(value: number) {
    this._maxLifePoints = value;
  }

  static createdRacesInstances(): number {
    return Elf.count;
  }
}

export default Elf;
