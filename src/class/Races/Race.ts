abstract class Race {
  private readonly name: string;
  private readonly dexterity: number;

  constructor(name: string, dexterity: number) {
    this.name = name;
    this.dexterity = dexterity;
  }

  getName = (): string => this.name;
  getDexterity = (): number => this.dexterity;

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}
export default Race;