import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-group-product-chart-widget',
  templateUrl: './group-product-chart-widget.component.html',
  styleUrls: ['./group-product-chart-widget.component.scss']
})
export class GroupProductChartWidgetComponent implements OnInit {


  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };

   public barChartLabels: Label[] = ['Aliancas', 'Pulseiras', 'Colares', 'Pingentes', 'Chaveiros', 'Brincos', 'Piercings'];
   public barChartType: ChartType = 'bar';
   public barChartLegend = true;


   public barChartData: ChartDataSets[] = [
     { data: [65, 59, 80, 81, 56, 55, 40], label: 'Ontem' },
     { data: [28, 48, 40, 19, 86, 27, 90], label: 'Hoje' }
   ];


  constructor() { }

  ngOnInit(): void {
  }

}
