import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../models/article.model";
import {ArticleService} from "../services/article/article.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-article-list-categorie',
  templateUrl: './article-list-categorie.component.html',
  styleUrls: ['./article-list-categorie.component.scss']
})
export class ArticleListCategorieComponent implements OnInit {

  articleCategorie!: Array<Article>;
  categories!: Array<string>;
  categorie: any;
  nameCategory!: string;

  constructor(private articleServices: ArticleService, private router: Router) {
  }

  ngOnInit(): void {
    const url = this.router.url.split('/');
    this.nameCategory = String(url[3]);
    this.articleCategorie = this.articleServices.getArticleByCategory(this.nameCategory);
    this.categories=this.articleServices.listCategorie;
  }

  showCategory(categorie:string){
    this.router.navigateByUrl('articles/category/'+categorie)
      .then(() => {
        window.location.reload();
      });
  }

}
