import { element } from 'protractor';
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @Input('inputFormat') format;
  constructor(private eleRef: ElementRef) { }

  @HostListener('mouseover') onMouseover() {
    const element = this.eleRef.nativeElement;
    console.log('ref var : ', element);
    element.style.color = 'red';
  }


  @HostListener('mouseleave') onMouseLeave() {
    const elementValue = this.eleRef.nativeElement.value;
    console.log('ref var onloeaave: ', elementValue);
    if (this.format == 'lowercase') {
      this.eleRef.nativeElement.value = elementValue.toLowerCase();
    } else {
      this.eleRef.nativeElement.value =  elementValue.toUpperCase();
    }
  }

}
