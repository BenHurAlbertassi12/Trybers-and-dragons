import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _dwarfCount = 0;

  constructor(name: string, dexterity: number, maxLifePoints = 80) {
    super(name, dexterity);
    this._maxLifePoints = maxLifePoints;

    Dwarf.addDwarf();
  }
}
export default Dwarf;