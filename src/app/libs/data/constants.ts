import { FaceSnap } from 'src/app/libs/models/face-snap.model';
import { Pokemon } from '../models/pokemon.model';
import { Book } from './../models/book.mode';
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
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
export const POKEMONS: Pokemon[] = [
  {
    id: 1,
    name: 'Bulbizarre',
    hp: 25,
    cp: 5,
    picture:
      'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
    types: ['Plante', 'Poison'],
    createdAt: new Date(),
  },
  {
    id: 2,
    name: 'Salamèche',
    hp: 28,
    cp: 6,
    picture:
      'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png',
    types: ['Feu'],
    createdAt: new Date(),
  },
  {
    id: 3,
    name: 'Carapuce',
    hp: 21,
    cp: 4,
    picture:
      'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png',
    types: ['Eau'],
    createdAt: new Date(),
  },
  {
    id: 4,
    name: 'Aspicot',
    hp: 16,
    cp: 2,
    picture:
      'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/013.png',
    types: ['Insecte', 'Poison'],
    createdAt: new Date(),
  },
  {
    id: 5,
    name: 'Roucool',
    hp: 30,
    cp: 7,
    picture:
      'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png',
    types: ['Normal', 'Vol'],
    createdAt: new Date(),
  },
  {
    id: 6,
    name: 'Rattata',
    hp: 18,
    cp: 6,
    picture:
      'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/019.png',
    types: ['Normal'],
    createdAt: new Date(),
  },
  {
    id: 7,
    name: 'Piafabec',
    hp: 14,
    cp: 5,
    picture:
      'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/021.png',
    types: ['Normal', 'Vol'],
    createdAt: new Date(),
  },
  {
    id: 8,
    name: 'Abo',
    hp: 16,
    cp: 4,
    picture:
      'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/023.png',
    types: ['Poison'],
    createdAt: new Date(),
  },
  {
    id: 9,
    name: 'Pikachu',
    hp: 21,
    cp: 7,
    picture:
      'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png',
    types: ['Electrik'],
    createdAt: new Date(),
  },
  {
    id: 10,
    name: 'Sabelette',
    hp: 19,
    cp: 3,
    picture:
      'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/027.png',
    types: ['Normal'],
    createdAt: new Date(),
  },
  {
    id: 11,
    name: 'Mélofée',
    hp: 25,
    cp: 5,
    picture:
      'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/035.png',
    types: ['Fée'],
    createdAt: new Date(),
  },
  {
    id: 12,
    name: 'Groupix',
    hp: 17,
    cp: 8,
    picture:
      'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/037.png',
    types: ['Feu'],
    createdAt: new Date(),
  },
];
export const booksData: Book[] = [
  {
    author: 'Chinua Achebe',
    country: 'Nigeria',
    imageLink: 'images/things-fall-apart.jpg',
    language: 'English',
    link: 'https://en.wikipedia.org/wiki/Things_Fall_Apart\n',
    pages: 209,
    title: 'Things Fall Apart',
    year: 1958,
  },
  {
    author: 'Hans Christian Andersen',
    country: 'Denmark',
    imageLink: 'images/fairy-tales.jpg',
    language: 'Danish',
    link: 'https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n',
    pages: 784,
    title: 'Fairy tales',
    year: 1836,
  },
  {
    author: 'Dante Alighieri',
    country: 'Italy',
    imageLink: 'images/the-divine-comedy.jpg',
    language: 'Italian',
    link: 'https://en.wikipedia.org/wiki/Divine_Comedy\n',
    pages: 928,
    title: 'The Divine Comedy',
    year: 1315,
  },
  {
    author: 'Unknown',
    country: 'Sumer and Akkadian Empire',
    imageLink: 'images/the-epic-of-gilgamesh.jpg',
    language: 'Akkadian',
    link: 'https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n',
    pages: 160,
    title: 'The Epic Of Gilgamesh',
    year: -1700,
  },
];
