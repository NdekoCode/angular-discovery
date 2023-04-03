import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBorderCard]',
})
export class BorderCardDirective {
  constructor(private el: ElementRef) {
    this.setBorder();
    this.setHeight(180);
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder('#009688');
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
