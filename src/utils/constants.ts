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
