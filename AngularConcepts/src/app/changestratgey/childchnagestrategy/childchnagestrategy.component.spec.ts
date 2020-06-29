import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildchnagestrategyComponent } from './childchnagestrategy.component';

describe('ChildchnagestrategyComponent', () => {
  let component: ChildchnagestrategyComponent;
  let fixture: ComponentFixture<ChildchnagestrategyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildchnagestrategyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildchnagestrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
