import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  // On met le point d'exclamation pour dire que c'est une variable qui ne sera jamais null et sera toujours de type string
  title!: string;
  description!: string;
  imageURL!: string;
  createdDate!: Date;
  isLiked!: boolean;
  /** Pour les likes sur une photos */
  snaps!: number;
  buttonText!: string;

  ngOnInit() {
    this.title = 'Lorem Ipsum is simply';
    this.description =
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ';
    this.imageURL =
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmxhY2slMjB3b21lbiUyMHdvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60';
    this.createdDate = new Date();
    this.snaps = 5;
    this.isLiked = false;
    this.buttonText = "J'aime";
  }
  onSnap() {
    if (this.isLiked) {
      this.snaps--;
      this.isLiked = false;
    } else {
      this.snaps++;
      this.isLiked = true;
    }
  }
}
