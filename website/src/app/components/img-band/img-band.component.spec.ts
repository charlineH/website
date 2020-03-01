import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgBandComponent } from './img-band.component';

describe('ImgBandComponent', () => {
  let component: ImgBandComponent;
  let fixture: ComponentFixture<ImgBandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgBandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgBandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
