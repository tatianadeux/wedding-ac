import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  postId: any;

  constructor(private http: HttpClient) {}

  sendData(answers:FormGroup) {
    const headers = new HttpHeaders().set('Content-Type','application/json');

    const answer = JSON.stringify(answers)
    this.http.post<any>('http://api.amandine-cedric.fr/presence', answer, {headers:headers}).subscribe(data => {
      this.postId = data.id
    } /* gérer dans le cas où il y a une erreur */
    );  /* URL / body / header */
    console.log(answers);
  }


}
