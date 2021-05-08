import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MassageComponent } from './massage.component';

describe('MassageComponent', () => {
  let component: MassageComponent;
  let fixture: ComponentFixture<MassageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MassageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MassageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
