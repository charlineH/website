import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionGeneraleVenteComponent } from './condition-generale-vente.component';

describe('ConditionGeneraleVenteComponent', () => {
  let component: ConditionGeneraleVenteComponent;
  let fixture: ComponentFixture<ConditionGeneraleVenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionGeneraleVenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionGeneraleVenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
