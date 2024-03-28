import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../models/article.model";
import {ArticleService} from "../services/article/article.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  @Input() article!: Article;

  constructor(private articleServices:ArticleService, private router: Router) { }

  ngOnInit(): void {
    const url = this.router.url.split('/');
    const id = Number(url[2]);
    this.article = this.articleServices.getArticleById(id);

  }

  showCategory(categorie:string){
    this.router.navigateByUrl('articles/category/'+categorie)
      .then(() => {
        window.location.reload();
      });
  }

}
