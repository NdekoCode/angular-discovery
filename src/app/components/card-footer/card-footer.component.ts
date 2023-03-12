import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-footer',
  templateUrl: './card-footer.component.html',
  styleUrls: ['./card-footer.component.scss'],
})
export class CardFooterComponent {
  @Input() snaps!: number;
  @Input() isLiked!: boolean;
  @Input() createdDate!: Date;
  @Input() location?: string;
  @Input() funcProps!: Function;
  @Output() increment = new EventEmitter<number>();
  onIncrement() {
    this.increment.emit(1);
  }
}
