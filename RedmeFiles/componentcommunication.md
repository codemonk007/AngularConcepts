There are two scenarios where in we need to communicate data in angular 
* Components having child parent relationship
* Heterogeneous components



1. #Components having child parent relationship
a typical way of communicating from parent to child is through @input and @output bindings.
they can also be used with ng-content , and @viewchild.
an angular core library @input takes the value from parent and sends over to child component through template

in component.ts
```javascript
    @input()
    name="ganapati"
```
in parent template 
```javascript
    <child-component [childname]="name"></child-component>
```

in child componnet.ts 
let childname='';

in child html:
<h1>{{childname}}</h1>

the chenges in child component is onetime and the next time value changes in @input can be captured from lifecycle methopd ngOnchanges . 
NgOnchnages gives simplechanges oject which has current and previous values of @input variables.

in child componenst 
ngOnchanges(changes:simplechnages){

    if(changes.name.previousvalues!= chnages.name.nextvalue)
    {
        childname=chnages.name.nextvalue;
    }
}


care should be taken as ngonchanges triggers whenever @values are changed.

 ### passing data from child to parent 
    using @output decorator we can pass data in terms of event in child component and we can catch it in parent 
    in child component 
```javascript
         @output 
        name:eventEmmitter<String>=new eventEmmitter<String>;
```
        to pass data
```javascript
        name.emiit("Ganapati");// here Ganapati is new value
```
    In parent component html 
```javascript
        <child componnet (name)=getData($event)>    
```
    in parent component .ts file 
```javascript
        getData(event){
            this.componentlocalvalue=event.value // here it is Ganapatio
        }

```


2.  # when components are not knowing each other 

Obeservable libraries cab ne used to communiocate with unknown components.
Subjects or behavior subjects are the key things that we can use to publish and subscriber components gets the notification whenver new value is being pushed from publishing component or Service.


in angular service 
    nameArray:subject<array> = new behaviorSubject<Array>;
    
    nameArray.next('10'); // new value is passed .

in component 2 ngOninit 
    service.nameArray.subscribe(newValue=>{
        componentVariable = newValue        
    })


3.  #using singleton Angular service variables
    if the data is not huge ,we can use Angular service and in service we can define a variable which will be consistant across as it acts like a singleton unless it is not created as singleton.

4. # Best solution Redux NGRX

    using ngrx is the best option among all as it makes datamanagment out of app business logic and handling data is much more easy .
    it has 
    *   reducer
    *   store
    *   actions
    *   effects
