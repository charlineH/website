import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MultipleImgBandComponent } from './multiple-img-band.component';

describe('MultipleImgBandComponent', () => {
  let component: MultipleImgBandComponent;
  let fixture: ComponentFixture<MultipleImgBandComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleImgBandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleImgBandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
