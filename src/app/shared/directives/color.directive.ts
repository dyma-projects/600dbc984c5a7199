import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]',
})
export class ColorDirective {
  @HostBinding('style.color') color: string;

  colors: Object = {
    37: 'red',
    38: 'blue',
    39: 'yellow',
    40: 'pink',
  };

  @HostListener('window: keydown', ['$event']) private onKeyDown({
    keyCode,
  }: KeyboardEvent) {
    this.color = this.colors[keyCode];
  }

  constructor() {}
}
