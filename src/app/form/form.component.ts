import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent {

  reponseForm!: FormGroup;
  selectedCheckbox: string[] = [];
  isSubmitted: boolean = false;
  isValid: boolean = true;

  constructor(private formBuilder: FormBuilder) {
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
    /* this.database.sendData(this.reponseForm.value); /* envoi dans la bdd via le service */
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
