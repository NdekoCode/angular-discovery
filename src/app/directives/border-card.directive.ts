import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderCard]',
})
export class BorderCardDirective {
  constructor(private el: ElementRef) {
    this.setBorder();
    this.setHeight(180);
  }
  @Input('appBorderCard') borderColor!: string;
  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || '#009688');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder();
  }
  setHeight(height: number) {
    this.el.nativeElement.style.minHeight = `${height}px`;
  }
  setBorder(color: string = 'transparent') {
    this.el.nativeElement.style.border = `4px solid ${color}`;
  }
}
