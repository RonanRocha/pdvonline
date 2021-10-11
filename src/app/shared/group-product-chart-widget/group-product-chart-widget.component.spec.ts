import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupProductChartWidgetComponent } from './group-product-chart-widget.component';

describe('GroupProductChartWidgetComponent', () => {
  let component: GroupProductChartWidgetComponent;
  let fixture: ComponentFixture<GroupProductChartWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupProductChartWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupProductChartWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
