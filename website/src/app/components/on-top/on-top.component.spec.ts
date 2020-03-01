import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnTopComponent } from './on-top.component';

describe('OnTopComponent', () => {
  let component: OnTopComponent;
  let fixture: ComponentFixture<OnTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
