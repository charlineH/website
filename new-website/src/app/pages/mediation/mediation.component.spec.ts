import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediationComponent } from './mediation.component';

describe('MediationComponent', () => {
  let component: MediationComponent;
  let fixture: ComponentFixture<MediationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
