"use strict";
exports.__esModule = true;
exports.ReponseInvitation = exports.Presence = void 0;
var Presence = /** @class */ (function () {
    function Presence(presenceMairie, presenceDiscours, presenceGouter, presenceSoiree) {
        this.presenceMairie = presenceMairie;
        this.presenceDiscours = presenceDiscours;
        this.presenceGouter = presenceGouter;
        this.presenceSoiree = presenceSoiree;
    }
    return Presence;
}());
exports.Presence = Presence;
var ReponseInvitation = /** @class */ (function () {
    function ReponseInvitation(name, email, presence, nombreAdultes, nombreEnfants, musique) {
        this.name = name;
        this.email = email;
        this.presence = presence;
        this.nombreAdultes = nombreAdultes;
        this.nombreEnfants = nombreEnfants;
        this.musique = musique;
    }
    return ReponseInvitation;
}());
exports.ReponseInvitation = ReponseInvitation;
