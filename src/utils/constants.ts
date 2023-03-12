import { FaceSnap } from 'src/app/models/face-snap.model';

export const faceSnapsData: FaceSnap[] = [
  {
    id: 1,
    title: 'Lorem Ipsum is simply',

    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',

    imageURL:
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmxhY2slMjB3b21lbiUyMHdvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    createdDate: new Date(),
    snaps: 17,
    location: 'Paris',
  },
  {
    id: 2,
    title: 'Lorem Ipsum is simply',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    imageURL: '/assets/images/HEALTHYFRESH.jpg',
    createdDate: new Date(),
    snaps: 205,
    location: 'Congo RDC',
  },
  {
    id: 3,
    title: 'Lorem Ipsum is simply',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    imageURL:
      'https://images.unsplash.com/photo-1571442463800-1337d7af9d2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsYWNrJTIwd29tZW4lMjB3b3JrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    createdDate: new Date(),
    snaps: 0,
  },
  {
    id: 4,
    title: 'Archibald',
    description: 'Mon meilleur ami depuis tout petit !',
    imageURL: '/assets/images/teddy.jpg',
    createdDate: new Date(),
    snaps: 0,
    location: 'Paris',
  },
  {
    id: 5,
    title: 'Three Rock Mountain',
    description: 'Un endroit magnifique pour les randonnées.',
    imageURL: '/assets/images/mountain.jpg',
    createdDate: new Date(),
    snaps: 6,
    location: 'la montagne',
  },
  {
    id: 6,
    title: 'Un bon repas',
    description: "Mmmh que c'est bon !",
    imageURL: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
    createdDate: new Date(),
    snaps: 0,
  },
];
export const products = [
  {
    title: 'iPhone 9',
    description: 'An apple mobile which is nothing like apple',
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: 'Apple',
    category: 'smartphones',
    imageURL: 'https://dummyjson.com/image/i/products/1/thumbnail.jpg',

    like: 9,
  },
  {
    title: 'iPhone X',
    description:
      'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
    price: 899,
    discountPercentage: 17.94,
    rating: 4.44,
    stock: 34,
    brand: 'Apple',
    category: 'smartphones',
    imageURL: 'https://dummyjson.com/image/i/products/2/thumbnail.jpg',
    like: 5,
  },
  {
    title: 'Samsung Universe 9',
    description:
      "Samsung's new variant which goes beyond Galaxy to the Universe",
    price: 1249,
    discountPercentage: 15.46,
    rating: 4.09,
    stock: 36,
    brand: 'Samsung',
    category: 'smartphones',
    imageURL: 'https://dummyjson.com/image/i/products/3/thumbnail.jpg',
    like: 4,
  },
  {
    title: 'OPPOF19',
    description: 'OPPO F19 is officially announced on April 2021.',
    price: 280,
    discountPercentage: 17.91,
    rating: 4.3,
    stock: 123,
    brand: 'OPPO',
    category: 'smartphones',
    imageURL: 'https://dummyjson.com/image/i/products/4/thumbnail.jpg',
    like: 1,
  },
  {
    title: 'Huawei P30',
    description:
      'Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.',
    price: 499,
    discountPercentage: 10.58,
    rating: 4.09,
    stock: 0,
    brand: 'Huawei',
    category: 'smartphones',
    imageURL: 'https://dummyjson.com/image/i/products/5/thumbnail.jpg',
    like: 3,
  },
  {
    title: 'MacBook Pro',
    description:
      'MacBook Pro 2021 with mini-LED display may launch between September, November',
    price: 1749,
    discountPercentage: 11.02,
    rating: 4.57,
    stock: 83,
    brand: 'APPle',
    category: 'laptops',
    imageURL: 'https://dummyjson.com/image/i/products/6/thumbnail.png',
    like: 1,
  },
];
