import { Directive } from '@angular/core';
import {ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirective]'
})
export class DirectiveDirective {

  constructor(el:ElementRef) {

    el.nativeElement.style.backgroundColor = '#5789D8';
   }

}
