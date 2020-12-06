import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Images } from '../models/Images';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public imagesUrl: string = 'http://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) { }

  getImages() {
    return this.http.get<Images[]>(this.imagesUrl);
  }

}
