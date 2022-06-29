"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FormComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var FormComponent = /** @class */ (function () {
    function FormComponent(formBuilder, database) {
        this.database = database;
        this.name = "";
        this.email = "";
        this.presences = [
            { id: 0, name: 'Nous serons avec vous' },
            { id: 1, name: 'Nous ne pourrons pas être là' }
        ];
        this.choices = [
            { id: 0, name: 'La Mairie' },
            { id: 1, name: 'Le Discours Biblique' },
            { id: 2, name: 'Le Goûter' },
            { id: 3, name: 'Le Repas dansant' }
        ];
    } /* j'ai injecté mon service dans mon component */
    FormComponent.prototype.ngOnInit = function () {
        this.reponseForm = new forms_1.FormGroup({
            name: new forms_1.FormControl("", forms_1.Validators.compose([
                forms_1.Validators.required,
                forms_1.Validators.minLength(1),
                forms_1.Validators.maxLength(100)
            ])),
            email: new forms_1.FormControl("", forms_1.Validators.compose([
                forms_1.Validators.required,
                forms_1.Validators.email,
                forms_1.Validators.minLength(1)
            ])),
            presences: new forms_1.FormControl(forms_1.Validators.required),
            choices: new forms_1.FormArray([]),
            nombreDePersonnes: new forms_1.FormControl(""),
            musique: new forms_1.FormControl("")
        });
    };
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
    FormComponent.prototype.onSubmitForm = function () {
        console.log(this.reponseForm.value);
        this.database.sendData(this.reponseForm.value); /* envoi dans la bdd via le service */
    };
    FormComponent = __decorate([
        core_1.Component({
            selector: 'app-form',
            templateUrl: './form.component.html',
            styleUrls: ['./form.component.scss']
        })
    ], FormComponent);
    return FormComponent;
}());
exports.FormComponent = FormComponent;
/* voir pour faire un this.Form.value pour récupérer toutes les valeurs du formulaire pour l'envoyer au back*/
