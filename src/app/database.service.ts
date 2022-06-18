import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }

  sendData(answers:any) {
    this.http.post<any>('URL',answers);
    console.log(answers);
  }
}
