import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class PlayerLandingService {

  constructor(private http: Http) {

  }

  get() {
    return new Promise(resolve => {
      this.http.request('http://pokerseason.herokuapp.com/api/v1/participants')
        .subscribe((res: Response) => {
          var data = res.json();
          resolve(data.slice(0,5))
        });
    });
  }
}
