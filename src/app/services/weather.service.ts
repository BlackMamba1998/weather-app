import { CurrentWeatherData } from '../models/current-weather-data.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Forecast } from '../models/forecast.model';


@Injectable({
  providedIn: 'root',
})
export class WeatherService {

  constructor(protected http: HttpClient) {}

  public getCurrentWeatherData() {
    return this.http.get<CurrentWeatherData>('http://api.weatherapi.com/v1/current.json?key='
    + environment.apiKey +
    '&q=Split',
    { observe: 'response', responseType: 'json' });
  }

  public getWeatherAndAirQuality() {
    return this.http.get<CurrentWeatherData>('http://api.weatherapi.com/v1/current.json?key='
    + environment.apiKey +
    '&q=Split&aqi=yes',
    { observe: 'response', responseType: 'json' });
  }


  public getDailyWeatherByCityName(city: string) {
    const url: string = 'http://api.weatherapi.com/v1/forecast.json?key='
      + environment.apiKey
      + '&q='
      + city
      + '&days=3&aqi=no';

    return this.http.get(url);
  }

  public getForecast() {
    var todayDate = new Date().toISOString().slice(0, 10);
    return this.http.get<Forecast>('http://api.weatherapi.com/v1/astronomy.json?key='
      + environment.apiKey +
      '&q=Split&dt='+todayDate,
      { observe: 'response', responseType: 'json' });
  }

}
