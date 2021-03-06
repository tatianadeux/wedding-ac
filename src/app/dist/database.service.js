"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DatabaseService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var DatabaseService = /** @class */ (function () {
    function DatabaseService(http) {
        this.http = http;
    }
    DatabaseService.prototype.sendData = function (answers) {
        var _this = this;
        var headers = new http_1.HttpHeaders().set('Content-Type', 'application/json');
        var answer = JSON.stringify(answers);
        this.http.post('http://api.amandine-cedric.fr/presence', answer, { headers: headers }).subscribe(function (data) {
            _this.postId = data.id;
        } /* gérer dans le cas où il y a une erreur */); /* URL / body / header */
        console.log(answers);
    };
    DatabaseService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], DatabaseService);
    return DatabaseService;
}());
exports.DatabaseService = DatabaseService;
