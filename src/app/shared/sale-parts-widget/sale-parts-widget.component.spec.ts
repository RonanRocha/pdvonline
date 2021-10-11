import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalePartsWidgetComponent } from './sale-parts-widget.component';

describe('SalePartsWidgetComponent', () => {
  let component: SalePartsWidgetComponent;
  let fixture: ComponentFixture<SalePartsWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalePartsWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalePartsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
