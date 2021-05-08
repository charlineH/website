import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GallerieComponent } from './gallerie.component';

describe('GallerieComponent', () => {
  let component: GallerieComponent;
  let fixture: ComponentFixture<GallerieComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GallerieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
