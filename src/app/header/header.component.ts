import { Component, OnInit } from '@angular/core';
import {ArticleService} from "../services/article/article.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  categories!: Array<string>;

  constructor(private articleServices: ArticleService, private router: Router) { }

  ngOnInit(): void {
    this.categories=this.articleServices.listCategorie;
  }

}
