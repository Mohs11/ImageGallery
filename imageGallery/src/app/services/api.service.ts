import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public imagesUrl: string = 'http://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) { }

  getImages() {
    return this.http.get(this.imagesUrl);
  }

}
