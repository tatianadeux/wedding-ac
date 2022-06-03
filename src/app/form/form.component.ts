import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  reponseForm!:FormGroup;
  formBuilder: any;
  group : any;

  presences = [
    {id: 0, name : 'Nous serons avec vous'},
    {id: 1, name : 'Nous ne pourrons pas être là'}
  ]

  choices = [
    {id: 0, name : 'La Mairie'},
    {id: 1, name : 'Le Discours Biblique'},
    {id: 2, name : 'Le Goûter et le Repas dansant'}
  ]

  constructor (formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.reponseForm = new FormGroup({
      nom : new FormControl(),
      contact : new FormControl(),
      presences : new FormControl(),
      choices : new FormControl()
    })
  }

  onSubmitForm(): void {
    console.log(this.reponseForm.value)
  }

}
