export type Post = {
  title: string;
  price: number;
  description: string;
  image: string;
  like: number;
  [key: string]: string | number;
};
export type Product = {
  id: string | number;
  title: string;
  price: number;
  description: string;
  imageURL: string;
  like: number;
  discountPercentage?: number;
  stock: number;
  rating?: number;
  brand?: string;
  category?: string;
};
