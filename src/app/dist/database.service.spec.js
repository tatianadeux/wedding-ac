"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var database_service_1 = require("./database.service");
describe('DatabaseService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(database_service_1.DatabaseService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
