the main advantage of angular is cmponent tree .Each component tree contains list of child components.
Input bindings are the main and important concept of angular.

In a typical scenario always value are being passes to child component from parent .

Ex:
<child-component [inputbindValue]="someValue"></child-component>

but there are typical scenarios where we may need to to pass html from parent to child in that case we use ngcontent and it is also known as content projection .

In Angular, content projection is used to project content in a component.Content projection allows you to insert a **shadow DOM** in your component. To put it simply, if you want to insert HTML elements or other components in a component, then you do that using the concept of content projection. 

In Angular, you achieve content projection using < ng-content >< /ng-content >.
You can make reusable components and scalable applications by properly using content projection.
Ex:
```javascript
in parent 
<app-child>
<div>
  <h1 class="body">Heloo There</h1>
  <h2 class="footer">Yo Mamba</h2>
</div>
</app-child>

in child component 
<div class="card">
    <div class="card-header">
    <div class="card-title">Welcome to GMAS</div>
    </div>
    <div class="card-body">
  <ng-content class=".body"></ng-content>
    </div>
    <div class="card-footer">
            <ng-content class=".footer"></ng-content>
    This is the application Footer.
    </div>
    </div>

refer **content-projection** component for realtime example.





