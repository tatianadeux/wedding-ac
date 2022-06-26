import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { DatabaseService } from '../database.service';
import { ValidationErrors } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  reponseForm!:FormGroup;

  name: string = "";

  presences = [
    {id: 0, name : 'Nous serons avec vous'},
    {id: 1, name : 'Nous ne pourrons pas être là'}
  ]

  choices = [
    {id: 0, name : 'La Mairie'},
    {id: 1, name : 'Le Discours Biblique'},
    {id: 2, name : 'Le Goûter'},
    {id: 3, name : 'Le Repas dansant'}
  ]

  constructor (formBuilder:FormBuilder, private database: DatabaseService){} /* j'ai injecté mon service dans mon component */

  ngOnInit(): void {
    this.reponseForm = new FormGroup({
      name: new FormControl("",
        Validators.compose([
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(100)
        ])),
      email: new FormControl("",
        Validators.compose([
          Validators.required,
          Validators.email,
          Validators.minLength(1)
        ])),
      presences: new FormControl(Validators.required),
      choices: new FormControl(""),
      numberOfPeople: new FormControl(""),
      music: new FormControl("")
    })
  }

  onSubmitForm(): void {
    console.log(this.reponseForm.value);
    this.database.sendData(this.reponseForm.value); /* envoi dans la bdd via le service */
  }

}

