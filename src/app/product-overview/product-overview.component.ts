import { Component, Inject, OnInit } from '@angular/core';
import { ConfigurationModel, ConfiguratorContext } from '@elfsquad/configurator';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.css']
})
export class ProductOverviewComponent implements OnInit {
  public configurationModels: ConfigurationModel[] = [];

  constructor(
    @Inject(ConfiguratorContext) private configuratorContext: ConfiguratorContext,
  ) { }

  ngOnInit(): void {
    this.configuratorContext.getConfigurationModels().then(configurationModels => {
      this.configurationModels = configurationModels.features;
    });
  }
}

