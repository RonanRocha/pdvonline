import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FilterComponent } from './shared/filter/filter.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { LoadingDirective } from './directives/loading.directive';
import { TicketWidgetComponent } from './shared/ticket-widget/ticket-widget.component';
import { BillingWidgetComponent } from './shared/billing-widget/billing-widget.component';
import { SellersWidgetComponent } from './shared/sellers-widget/sellers-widget.component';
import { PaymentFormChartWidgetComponent } from './shared/payment-form-chart-widget/payment-form-chart-widget.component';
import { GroupProductChartWidgetComponent } from './shared/group-product-chart-widget/group-product-chart-widget.component';
import { SalePartsWidgetComponent } from './shared/sale-parts-widget/sale-parts-widget.component';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    FilterComponent,
    LoadingDirective,
    TicketWidgetComponent,
    BillingWidgetComponent,
    SellersWidgetComponent,
    PaymentFormChartWidgetComponent,
    GroupProductChartWidgetComponent,
    SalePartsWidgetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ChartsModule
  ],
  providers: [{provide: LOCALE_ID,      useValue: 'pt-BR'    } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
