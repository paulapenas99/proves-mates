import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiServiceService {

  constructor(private http: HttpClient) {}
  getCountriesRegion(region:string){
    const apiURL = 'https://restcountries.eu/rest/v2/region/'+region;

    return this.http.get(apiURL);
  }

}