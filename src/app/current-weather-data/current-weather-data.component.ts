import { CurrentWeatherData } from './../models/current-weather-data.model';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { Accessory } from '../models/accessory.model';
import { Forecast } from './../models/forecast.model';

@Component({
  selector: 'app-current-weather-data',
  templateUrl: './current-weather-data.component.html',
  styleUrls: ['./current-weather-data.component.css']
})
export class CurrentWeatherDataComponent implements OnInit {

  currentWeather: CurrentWeatherData;
  airQualityAndWeather: CurrentWeatherData;
  forecast: Forecast;
  accessories: Accessory[] = [];

  constructor( private weatherService: WeatherService ) { }

  ngOnInit(): void {
    this.getCurrentWeatherData();
    this.getWeatherAndAirQuality();
    this.getForecast();
  }

  getCurrentWeatherData() {
    this.weatherService.getCurrentWeatherData().subscribe((response) => {
      this.currentWeather = response.body,
        console.log(this.currentWeather)
    }
    )
  }

  getWeatherAndAirQuality() {
    this.weatherService.getWeatherAndAirQuality().subscribe((response) => {
      this.airQualityAndWeather = response.body,
        console.log(this.airQualityAndWeather)
    }
    )
  }

  getForecast() {
    this.weatherService.getForecast().subscribe((response) => {
      this.forecast = response.body,
        console.log(this.forecast)
    }
    )

  }



}
