import { Injectable } from '@angular/core';
import {Contact} from "../../models/contact.model";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  listContact: Array<Contact> = [
    {
      name: "Duchesne",
      firstname: "Nicolas",
      mail: "nicolas.duchesne@yahoo.com",
      img: "assets/Nicolas.jpg",
    },
    {
      name: "Rocha Fernandes",
      firstname: "Josiane",
      mail: "josi.rocha.fernandes@outlook.fr",
      img: "assets/josiane_photo.jpg"
    },

  ]
}
