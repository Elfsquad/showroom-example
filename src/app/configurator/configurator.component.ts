import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Configuration, ConfiguratorContext } from '@elfsquad/configurator';

@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.css']
})
export class ConfiguratorComponent implements OnInit {
  public configuration: Configuration | null = null;
  public activeIndex: number = 0;

  constructor(
    private route: ActivatedRoute,
    private configuratorContext: ConfiguratorContext
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.configuratorContext.newConfiguration(params['id'])
        .then(configuration => {
          this.configuration = configuration;
        });
      this.configuratorContext.onUpdate((e: CustomEvent) => {
        this.configuration = e.detail;
      });
    });
  }

  next() {
    this.activeIndex += 1;
  }

  previous() {
    this.activeIndex -= 1;
  }
}

