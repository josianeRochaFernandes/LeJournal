import {Component, Input, OnInit} from '@angular/core';
import {Contact} from "../models/contact.model";
import {ContactService} from "../services/contact/contact.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {

  @Input() contact!: Contact;

  constructor(private contactServices:ContactService, private router: Router) { }

  ngOnInit(): void {
  }

}
