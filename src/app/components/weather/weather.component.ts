import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {

  @Input()
  private location: string;

  constructor() { }

  ngOnInit() {}

}
