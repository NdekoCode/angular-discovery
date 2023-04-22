export class Pokemon {
  id!: number | string;
  hp!: number;
  cp!: number;
  name!: string;
  picture!: string;
  types!: Array<string>;
  createdAt!: Date;
}
