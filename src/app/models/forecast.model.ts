import { Location } from './location.model';
import { Astronomy } from './astronomy.model';

export interface Forecast {
  location: Location;
  astronomy: Astronomy;
}

export class Forecast {
  constructor(
    public location: Location,
    public astronomy: Astronomy
  ) { }
}
