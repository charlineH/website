import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AProposComponent } from './a-propos.component';

describe('AProposComponent', () => {
  let component: AProposComponent;
  let fixture: ComponentFixture<AProposComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AProposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AProposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
