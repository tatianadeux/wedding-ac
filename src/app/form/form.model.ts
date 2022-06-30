export class Presence {
  constructor(
    public presenceMairie: boolean,
    public presenceDiscours: boolean,
    public presenceGouter: boolean,
    public presenceSoiree: boolean
  ){
  }
}

export class ReponseInvitation {
  constructor(
    public name: string,
    public email: string,
    public presence: Presence,
    public nombreAdultes: number,
    public nombreEnfants: number,
    public musique: string
  ) {
  }
}
