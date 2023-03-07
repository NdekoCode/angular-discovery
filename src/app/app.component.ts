import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  snap!: FaceSnap;
  secondSnap!: FaceSnap;
  thirdSnap!: FaceSnap;
  typeSnap!: string;

  ngOnInit(): void {
    this.typeSnap = 'Photos';
    this.snap = {
      title: 'Lorem Ipsum is simply',

      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',

      imageURL:
        'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmxhY2slMjB3b21lbiUyMHdvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      createdDate: new Date(),
      snaps: 7,
    };

    this.secondSnap = {
      title: 'Lorem Ipsum is simply',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
      imageURL:
        'https://images.unsplash.com/photo-1573164574472-797cdf4a583a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJsYWNrJTIwd29tZW4lMjB3b3JrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      createdDate: new Date(),
      snaps: 5,
    };

    this.thirdSnap = {
      title: 'Lorem Ipsum is simply',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
      imageURL:
        'https://images.unsplash.com/photo-1571442463800-1337d7af9d2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsYWNrJTIwd29tZW4lMjB3b3JrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      createdDate: new Date(),
      snaps: 4,
    };
  }
}
