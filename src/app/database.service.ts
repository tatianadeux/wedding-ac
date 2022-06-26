import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) {}

  sendData(answers:FormGroup) {
    this.http.post<any>('http://api.amandine-cedric.fr/',answers);
    console.log(answers);
  }
}
