import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TaichiComponent } from './taichi.component';

describe('TaichiComponent', () => {
  let component: TaichiComponent;
  let fixture: ComponentFixture<TaichiComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TaichiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaichiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
