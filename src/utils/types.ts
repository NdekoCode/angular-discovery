export type Post = {
  title: string;
  price: number;
  description: string;
  image: string;
  like: number;
  [key: string]: string | number;
};
export type Product = {
  title: string;
  price: number;
  description: string;
  imageURL: string;
  like: number;
  discountPercentage?: number;
  rating?: number;
  stock?: number;
  brand?: string;
  category?: string;
};
