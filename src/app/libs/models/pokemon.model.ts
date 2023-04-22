export class Pokemon {
  id!: number | string;
  hp!: number;
  cp!: number;
  name!: string;
  picture!: string;
  types!: Array<string>;
  createdAt!: Date;
  constructor() {
    this.id = Math.random().toString(36).substring(0, 6);
    this.name = '';
    this.hp = 0;
    this.cp = 0;
    this.picture =
      'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/xxx.png';
    this.types = [];
    this.createdAt = new Date();
  }
}
