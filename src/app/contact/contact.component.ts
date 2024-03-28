import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact.model';
import {ContactService} from "../services/contact/contact.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  listContact!:Array<Contact>;
  constructor(private contactServices: ContactService) { }

  ngOnInit(): void {
    this.listContact=this.contactServices.listContact;
  }
}
