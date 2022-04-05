import { Component, OnInit } from '@angular/core';
import {ConfiguratorContext, QuotationRequest} from '@elfsquad/configurator';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public isSubmitted = false;
  public model: QuotationRequest = {};

  constructor(
    private configuratorContext: ConfiguratorContext
  ) { }

  ngOnInit(): void { }

  requestQuote() {
    this.configuratorContext.requestQuote(this.model).then(_ => {
      this.isSubmitted = true;
    });
  }
}

