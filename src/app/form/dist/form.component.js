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
    function FormComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.selectedCheckbox = [];
        this.isSubmitted = false;
        this.isValid = true;
        this.reponseForm = this.formBuilder.group({
            name: new forms_1.FormControl("", forms_1.Validators.required),
            email: new forms_1.FormControl("", forms_1.Validators.compose([
                forms_1.Validators.required,
                forms_1.Validators.email
            ])),
            presence: this.formBuilder.group({
                presenceMairie: new forms_1.FormControl(false),
                presenceDiscours: new forms_1.FormControl(false),
                presenceGouter: new forms_1.FormControl(false),
                presenceSoiree: new forms_1.FormControl(false)
            }),
            nombreAdultes: new forms_1.FormControl(0),
            nombreEnfants: new forms_1.FormControl(0),
            musique: new forms_1.FormControl("")
        });
    }
    FormComponent.prototype.controleOnChange = function (event) {
        var inputHtml = event.target;
        if (inputHtml.checked) {
            this.selectedCheckbox.push(inputHtml.value);
            console.log(this.selectedCheckbox);
        }
        else {
            var index = this.selectedCheckbox.findIndex(function (choice) { return choice === inputHtml.value; });
            this.selectedCheckbox.splice(index, 1);
            console.log(this.selectedCheckbox);
        }
    };
    FormComponent.prototype.onSubmit = function () {
        if (this.reponseForm.valid) {
            console.log(this.reponseForm.value);
            this.isSubmitted = true;
            /* this.database.sendData(this.reponseForm.value); /* envoi dans la bdd via le service */
        }
        if (this.reponseForm.invalid) {
            this.isValid = false;
        }
    };
    Object.defineProperty(FormComponent.prototype, "name", {
        get: function () {
            return this.reponseForm.controls['name'];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormComponent.prototype, "email", {
        get: function () {
            return this.reponseForm.controls['email'];
        },
        enumerable: false,
        configurable: true
    });
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
