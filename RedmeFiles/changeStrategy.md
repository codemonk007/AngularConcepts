angular is a group of nodes under the hood .
Basic principle of Change ditecttion strategy is whenever there is any change in component,or any event is triggered in view angular checks the components from bottom up approach to see if it needs to update any component for the triggered event.

since it checks all the componnts in that hirarchy ,Some it is less performant and time consuming to construct DOM.
there are bacically two ways where in we can achive change ditection
1.  changeDitectionStrategy.default
2.  changeDitectionStrategy.onpush

Former one is the default behaviour of angular till 2<>8 .
there are properties in core called viewData and view state which are directly related to component.

the whole change strategy works on the basis of following terms,
1.  FirstCheck
2.  ChecksEnabled
3.  Errored
4.  Destroyed


checks enabled is by default made as true.
Change detection is skipped for the view and its child views if ChecksEnabled is false or view is in the Errored or Destroyed state.

under the hood there is component called View which has a method ditect changes,when a asynchronous event takes place,angular triggers change ditect in top most view.

```javascript
    export class AppComponent {
    constructor(cd: ChangeDetectorRef) { ... }

export declare abstract class ChangeDetectorRef {
    abstract checkNoChanges(): void;
    abstract detach(): void;
    abstract detectChanges(): void;
    abstract markForCheck(): void;
    abstract reattach(): void;
}
```


The main logic responsible for running change detection for a view resides in checkAndUpdateView function. Most of its functionality performs operations on child component views. This function is called recursively for each component starting from the host component. It means that a child component becomes parent component on the next call as a recursive tree unfolds.


following will happen when the method is being called
1.  viewstate.first check is set to true
2.  checks if there is any change in inout properties
3.  updates childview's change ditection state
4.  calls ngonchange if binding is changed
5.  ng oninit,Docheck
6.  updates ContentChildren parameter
7.  afterconntentinit,aftercontentchecked
8.  updates the dom interpolation.
9   childview updates
10. afterviewinit/afterviewchecked call


each time a change is ditected it takes below condition 
ViewState.ChecksEnabled to trigger change notification.

changeditection.detach() makes component to not to participate in change ditection
changeditection.reattach makes only parent componenet to participate in change detection.

Change Detection does not perform a deep object comparison, it only compares the previous and current value of properties used by the template

Angular patches several low-level browser APIs at startup to be able to detect changes in the application. This is done using zone.js which patches APIs such as EventEmitter, DOM event listeners, XMLHttpRequest, fs API in Node.js

## check component changestratgey for test.
