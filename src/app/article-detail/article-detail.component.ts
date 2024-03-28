import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../models/article.model";
import {ArticleService} from "../services/article/article.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {

  @Input() article!: Article;

  constructor(private articleServices:ArticleService, private router: Router) { }

  ngOnInit(): void {
  }

  showArticle(id:number){
    this.router.navigateByUrl('articles/'+id);
  }

  showCategory(categorie:string){
      this.router.navigateByUrl('articles/category/'+categorie);
  }

}
