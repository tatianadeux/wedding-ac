import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) {}

  sendData(answers:FormGroup)   {
    const headers = new HttpHeaders().set('Content-Type','application/json');

    const answer = JSON.stringify(answers)
    this.http.post<any>('http://api.amandine-cedric.fr/presence', answer);  /* URL / body / header */
    console.log(answers);
  }
}
