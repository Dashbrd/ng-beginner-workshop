import { ApiResponse } from '../models/api-response.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private httpClient: HttpClient) {

  }

  getPeople() {
    return this.httpClient.get<ApiResponse>('https://swapi.co/api/people');
  }
}
