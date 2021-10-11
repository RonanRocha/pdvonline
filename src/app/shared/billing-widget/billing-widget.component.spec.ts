import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingWidgetComponent } from './billing-widget.component';

describe('BillingWidgetComponent', () => {
  let component: BillingWidgetComponent;
  let fixture: ComponentFixture<BillingWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillingWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
