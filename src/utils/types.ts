export type Post = {
  title: string;
  price: number;
  description: string;
  image: string;
  like: number;
  [key: string]: string | number;
};
