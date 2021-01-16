import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[highlighter]',
})
export class HighlighterDirective {
  private isWarning = false;

  constructor() {}

  @HostBinding('class.has-background-warning')
  get isHighlighed() {
    return this.isWarning;
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.isWarning = true;
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.isWarning = false;
  }
}
