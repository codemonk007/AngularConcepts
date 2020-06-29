import { Component, OnInit, Input, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-childchnagestrategy',
  templateUrl: './childchnagestrategy.component.html',
  styleUrls: ['./childchnagestrategy.component.css'],
  // changeDetection:ChangeDetectionStrategy.OnPush

})
export class ChildchnagestrategyComponent implements OnInit {

  ngOnInit() {
  }
  constructor() {}
 
  @Input() data: string[];

  get runChangeDetection() {
    console.log('Checking the view');
    return true;
  }
}
