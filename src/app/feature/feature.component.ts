import { Component, Input, OnInit } from '@angular/core';
import { ConfigurationFeature, Configuration } from '@elfsquad/configurator';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {
  @Input('feature') feature: ConfigurationFeature | undefined;
  @Input('configuration') configuration: Configuration | undefined;

  constructor() { }

  ngOnInit(): void { }

  toggle(): void {
    if (!this.feature)
      return;

    if (!this.configuration)
      return;

    const value = this.feature.isSelected ? 0 : 1;
    this.configuration.updateRequirement(
      this.feature.id,
      this.feature.isSelected,
      value
    )
  }
}

