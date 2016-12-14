import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class PlayerService {

  constructor(private http: Http) {
  }

  get() {
    return new Promise(resolve => {
      this.http.request(environment.apiEndpoint + 'api/v1/participants')
        .subscribe((res: Response) => {
          var data = res.json();
          resolve(data);
        });
    });
  }
}
