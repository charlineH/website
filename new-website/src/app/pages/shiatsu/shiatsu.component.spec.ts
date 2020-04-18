import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiatsuComponent } from './shiatsu.component';

describe('ShiatsuComponent', () => {
  let component: ShiatsuComponent;
  let fixture: ComponentFixture<ShiatsuComponent>;

  beforeEach(async(() => {
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
