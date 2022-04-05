import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ConfiguratorContext, AuthenticationMethod} from '@elfsquad/configurator';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { ConfiguratorComponent } from './configurator/configurator.component';
import { FeatureComponent } from './feature/feature.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FormsModule } from '@angular/forms';

const options = {
  authenticationMethod: AuthenticationMethod.ANONYMOUS,
  tenantId: '5dcd73c7-c0e9-44e8-85f3-dfef7553e8a2',
};

const configuratorContext = new ConfiguratorContext(options);

@NgModule({
  declarations: [
    AppComponent,
    ProductOverviewComponent,
    ConfiguratorComponent,
    FeatureComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    { provide: ConfiguratorContext, useValue: configuratorContext }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

