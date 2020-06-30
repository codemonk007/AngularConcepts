import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-style',
  templateUrl: './class-style.component.html',
  styleUrls: ['./class-style.component.css']
})
export class ClassStyleComponent implements OnInit {

  constructor() { }
  classToApply="boldClass styleClass";
  applyBoldClass = true;
  ngOnInit() {
  }

  classesToApply(){
    let classes={
      colorClass: true,
      boldClass:true,
      styleClass:true
    }
    return classes;
  }

}
