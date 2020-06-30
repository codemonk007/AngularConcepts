angular comes with few unique way to implment styling .

Single way binding 
in html
<button class="colorClass" [class] ="classToApply">Click Me</button>

in .ts file
```javascript
classToApply="boldClass styleClass";
  applyBoldClass = true;
```
we can  add or remov a single class without affecting the classes
we are removing the class here based on applyBoldClass boolean value.

<button class="colorClass boldClass styleClass" [class.boldClass] ="applyBoldClass">Click Me</button>
<button class="colorClass" [ngClass]="classesToApply()">click me</button>

in .ts file 
```javascript
 classesToApply(){
    let classes={
      colorClass: true,
      boldClass:true,
      styleClass:true
    }
    return classes;
  }
```
