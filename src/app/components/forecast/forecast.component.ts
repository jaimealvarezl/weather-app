import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {OpenWeatherService} from '../../services/open-weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent implements OnChanges {

  @Input()
  private location: string;

  constructor(private openWeatherService: OpenWeatherService) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log({changes});
  }

}
