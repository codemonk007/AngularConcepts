import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-subchildchnagestrategy',
  templateUrl: './subchildchnagestrategy.component.html',
  styleUrls: ['./subchildchnagestrategy.component.css']
})
export class SubchildchnagestrategyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() src: string;

  check() {
      console.log('image component view checked');
  }
}
