import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ShiatsuComponent } from './shiatsu.component';

describe('ShiatsuComponent', () => {
  let component: ShiatsuComponent;
  let fixture: ComponentFixture<ShiatsuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShiatsuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiatsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
