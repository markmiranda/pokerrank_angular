import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class SeasonLandingService {

  constructor(private http: Http) {

  }

  get() {
    return new Promise(resolve => {
      this.http.request(environment.apiEndpoint + '/api/v1/seasons')
        .subscribe((res) => {
          var data = res.json();
          resolve(data.slice(0,5))
        });
    });
  }
}
