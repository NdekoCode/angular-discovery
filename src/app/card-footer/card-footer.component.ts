import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-footer',
  templateUrl: './card-footer.component.html',
  styleUrls: ['./card-footer.component.scss'],
})
export class CardFooterComponent {
  @Input() snaps!: number;
  @Input() isLiked!: boolean;
  @Input() createdDate!: Date;
  onIncrement() {
    if (this.isLiked) {
      this.snaps--;
      this.isLiked = false;
    } else {
      this.snaps++;
      this.isLiked = true;
    }
  }
}
