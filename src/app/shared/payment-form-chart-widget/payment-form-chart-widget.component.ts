import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-payment-form-chart-widget',
  templateUrl: './payment-form-chart-widget.component.html',
  styleUrls: ['./payment-form-chart-widget.component.scss']
})
export class PaymentFormChartWidgetComponent implements OnInit {

   public pieChartOptions: ChartOptions = {
     responsive: true,
     maintainAspectRatio: false,
   };

   // Doughnut
   public doughnutChartLabels: Label[] = ['Debito', 'Credito', 'Dinheiro'];
   public doughnutChartData: MultiDataSet = [
     [350, 450, 100]
   ];
   public doughnutChartType: ChartType = 'doughnut';


  constructor() { }

  ngOnInit(): void {
  }

}
