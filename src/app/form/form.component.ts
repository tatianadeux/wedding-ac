import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../database.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {

  public reponseForm!: FormGroup;
  public selectedCheckbox: string[] = [];
  public isSubmitted: boolean = false;
  public isValid: boolean = true;
  private apiURL: string ="http://api.amandine-cedric.fr/presence"

  constructor(private formBuilder: FormBuilder, private database: DatabaseService, private http: HttpClient) {
    this.reponseForm = this.formBuilder.group({
      name: new FormControl("",
          Validators.required
        ),
      email: new FormControl("",
        Validators.compose([
          Validators.required,
          Validators.email
        ])),
      presence: this.formBuilder.group({
        presenceMairie: new FormControl(false),
        presenceDiscours: new FormControl(false),
        presenceGouter: new FormControl(false),
        presenceSoiree: new FormControl(false)
      }),
      nombreAdultes: new FormControl(0),
      nombreEnfants: new FormControl(0),
      musique: new FormControl("")
    })
   }

   ngOnInit(): void {
    this.http.get(this.apiURL)
      /*.subscribe(*/
      /* virer les références à http dans le component et tout mettre dans le service */
   }

   controleOnChange(event: Event){
    const inputHtml = (event.target as HTMLInputElement)

    if (inputHtml.checked) {
      this.selectedCheckbox.push(inputHtml.value);
      console.log(this.selectedCheckbox)

    } else {
      const index = this.selectedCheckbox.findIndex(choice => choice === inputHtml.value);
      this.selectedCheckbox.splice(index, 1)
      console.log(this.selectedCheckbox)
    }
   }

  onSubmit(): void {
    if (this.reponseForm.valid) {
      console.log(this.reponseForm.value);
      this.isSubmitted = true;

      this.database.sendData(this.reponseForm.value); /* envoi dans la bdd via le service */
    }

    if (this.reponseForm.invalid) {
      this.isValid = false;
    }
  }

  get name(){
    return this.reponseForm.controls['name'];
  }

  get email(){
    return this.reponseForm.controls['email'];
  }
}

