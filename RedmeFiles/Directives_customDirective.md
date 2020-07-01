Angular is sctructurized with 3 types of directives.
1. structural
2. Attribute
3. Components


#Structural Directives
Directives that creates and destroys DOM elements known as Structural Directives.

Structural directives are not DOM-friendly in the sense that they create, destroy, or re-create DOM elements based on certain conditions.
structural directives creates or deletes the dom eliments on runtime based on some condition 
 best examples are 
 *  *ngIf
 *  *ngFor



#Attritube Directives
Directives that manipulate DOM by changing behavior and appearance known as Attribute Directives.

Apply conditional styles and classes to elements

<p [style.color]="'blue'">Directives are awesome</p>

Hide and show elements, conditionally (different from creating and destroying elements)
<p [hidden]="shouldHide">Directives are awesome</p>

Dynamically changing the behavior of a component based on a changing property


#custom directive
some time it is important to customise the requirement and design our directives according to it .Angular 2 provides clean and simple APIs to help us create custom directives.Creating a custom directive is just like creating an Angular component. To create a custom directive we have to replace @Component decorator with @Directive decorator.

Ex:
import { Directive, ElementRef, Renderer } from '@angular/core';

// Directive decorator
```javascript
@Directive({ selector: '[myHidden]' })
// Directive class
export class HiddenDirective {
    constructor(el: ElementRef, renderer: Renderer) {
     // Use renderer to render the element with styles
       renderer.setElementStyle(el.nativeElement, 'display', 'none');
    }
}
```
To create a structural Directive :
Ex:
