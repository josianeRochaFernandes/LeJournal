import {Component, Input, OnInit} from '@angular/core';
import {ArticleService} from "../services/article/article.service";
import {Article} from "../models/article.model";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  @Input() listArticle!:Array<Article>;
  constructor() { }

  ngOnInit(): void {

  }

}
