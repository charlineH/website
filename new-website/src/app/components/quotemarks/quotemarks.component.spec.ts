import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { QuotemarksComponent } from './quotemarks.component';

describe('QuotemarksComponent', () => {
  let component: QuotemarksComponent;
  let fixture: ComponentFixture<QuotemarksComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotemarksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotemarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
