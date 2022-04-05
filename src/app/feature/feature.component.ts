import { Component, Input, OnInit } from '@angular/core';
import { ConfigurationFeature, ConfiguratorContext } from '@elfsquad/configurator';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {
  @Input('feature') feature: ConfigurationFeature | undefined;

  constructor(
    private configuratorContext: ConfiguratorContext
  ) { }

  ngOnInit(): void { }

  toggle(): void {
    if (!this.feature)
      return;

    const value = this.feature.isSelected ? 0 : 1;
    this.configuratorContext.updateRequirement(
      this.feature.id,
      this.feature.isSelected,
      value
    );
  }
}

