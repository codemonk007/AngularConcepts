import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubchildchnagestrategyComponent } from './subchildchnagestrategy.component';

describe('SubchildchnagestrategyComponent', () => {
  let component: SubchildchnagestrategyComponent;
  let fixture: ComponentFixture<SubchildchnagestrategyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubchildchnagestrategyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubchildchnagestrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
