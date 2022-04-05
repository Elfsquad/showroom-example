import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CheckoutComponent} from './checkout/checkout.component';
import {ConfiguratorComponent} from './configurator/configurator.component';
import {ProductOverviewComponent} from './product-overview/product-overview.component';

const routes: Routes = [
  { path: '', component: ProductOverviewComponent },
  { path: 'configure/:id', component: ConfiguratorComponent },
  { path: 'checkout/:id', component: CheckoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

