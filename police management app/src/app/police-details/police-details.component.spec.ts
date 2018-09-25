import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliceDetailsComponent } from './police-details.component';

describe('PoliceDetailsComponent', () => {
  let component: PoliceDetailsComponent;
  let fixture: ComponentFixture<PoliceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliceDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
