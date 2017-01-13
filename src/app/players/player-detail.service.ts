import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class PlayerDetailService {

  constructor(private http: Http) {

  }

  get(id) {
    return new Promise(resolve => {
      this.http.request(environment.apiEndpoint + 'api/v1/participants/' + id)
        .subscribe((res: Response) => {
          var data = res.json();
          resolve(data);
        });
    });
  }
}
