import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangestratgeyComponent } from './changestratgey.component';

describe('ChangestratgeyComponent', () => {
  let component: ChangestratgeyComponent;
  let fixture: ComponentFixture<ChangestratgeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangestratgeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangestratgeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
