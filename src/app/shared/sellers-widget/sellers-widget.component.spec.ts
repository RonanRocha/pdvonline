import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellersWidgetComponent } from './sellers-widget.component';

describe('SellersWidgetComponent', () => {
  let component: SellersWidgetComponent;
  let fixture: ComponentFixture<SellersWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellersWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellersWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
