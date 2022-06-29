import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray, AbstractControl } from '@angular/forms';
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

  email: string= "";

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
      choices: new FormArray([]),
      nombreDePersonnes: new FormControl(""),
      musique: new FormControl("")
    })
  }

/*
  onCheckboxChange(event: any){
    let selectedChoices = (this.reponseForm.controls['choices'] as FormArray);
    let valueSelected = (event.target.checked)
    let valueName = (event.target.value)
    console.log(valueSelected);

    if (valueSelected){
      selectedChoices.push(new FormControl(valueName));
    } else {
      let i: number = 0;
      selectedChoices.controls.forEach((ctrl: AbstractControl) => {
        if (ctrl.value == valueName) {
          selectedChoices.removeAt(i)
        }
        i++
      })
      console.log(selectedChoices);

    }
  }*/

  onSubmitForm(): void {
    console.log(this.reponseForm.value);
    this.database.sendData(this.reponseForm.value); /* envoi dans la bdd via le service */
  }

}
/* voir pour faire un this.Form.value pour récupérer toutes les valeurs du formulaire pour l'envoyer au back*/
