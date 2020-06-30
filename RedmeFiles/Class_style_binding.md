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
we can also use Ngclass to assign any class

in html
<button [Ngclass]="someclassreturn()">
```javascript
in .ts file 
someclassreturn(){
    return "someclass"
}
in html
.someclass{
    background yello;
}
```


ng clas can be used with conditional opertaor as well .
in html
<button [Ngclass]="someValue ? class1:class2"> //if class is null then we should have class2 value. else class2 1 cond
<button [Ngclass]="someValue ===0  class1:class2"> //if class is null then we should have class2 value. else class2 1 cond

```javascript
in .ts file 
someclassreturn(){
    return "someclass"
}
in html
.someclass{
    background yello;
}
```

Ng style laso used to pass styles in interpreting and runtime of container.

<button [ngStyle]="someValue ? (bgcolor:red);(bgcolor:blue)"> //if class is null then we should 
have class2 value. else class2 1 cond



