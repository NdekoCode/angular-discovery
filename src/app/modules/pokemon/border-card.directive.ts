import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderCard]',
})
export class BorderCardDirective {
  private defaultColor: string = '#86C8BC';
  private initialColor: string = 'transparent';
  private defaultHeight: string | number = 180;

  constructor(private el: ElementRef) {
    this.setBorder();
    this.setHeight(this.defaultHeight);
  }

  @Input('appBorderCard') borderColor!: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder();
  }

  setHeight(height: number | string = this.defaultHeight): void {
    this.el.nativeElement.style.minHeight = `${height}px`;
  }

  setBorder(color: string = this.initialColor) {
    this.el.nativeElement.style.border = `4px solid ${color}`;
  }
}
