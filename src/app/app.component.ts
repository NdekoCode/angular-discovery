import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  snap!: FaceSnap;
  ngOnInit(): void {
    this.snap = new FaceSnap(
      'Lorem Ipsum is simply',

      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',

      'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmxhY2slMjB3b21lbiUyMHdvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      new Date(),
      5
    );
  }
}
