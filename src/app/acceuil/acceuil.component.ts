import { Component, OnInit } from '@angular/core';
import {Article} from "../models/article.model";
import {ArticleService} from "../services/article/article.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponent implements OnInit {

  listArticle!: Array<Article>
  listCategorie!: Array<string>;

  constructor(private articleServices: ArticleService, private router: Router) { }

  ngOnInit(): void {
    this.listArticle=this.articleServices.listArticle;
    this.listCategorie=this.articleServices.listCategorie;
  }

  showCategory(categorie:string){
    this.router.navigateByUrl('articles/category/'+categorie);
  }

}
