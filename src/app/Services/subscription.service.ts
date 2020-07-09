import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  urlcategory: string;
  body: any;
  headers: any;

  constructor(private http: HttpClient) { }
  senddata(data: any) {
    this.urlcategory = 'https://example.com/api/subscribe';
    this.body = JSON.stringify(data);
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    return this.http.post(this.urlcategory, this.body,{ headers: this.headers });
  }
}
