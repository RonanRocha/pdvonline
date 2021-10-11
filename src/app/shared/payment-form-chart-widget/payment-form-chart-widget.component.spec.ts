import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentFormChartWidgetComponent } from './payment-form-chart-widget.component';

describe('PaymentFormChartWidgetComponent', () => {
  let component: PaymentFormChartWidgetComponent;
  let fixture: ComponentFixture<PaymentFormChartWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentFormChartWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentFormChartWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
