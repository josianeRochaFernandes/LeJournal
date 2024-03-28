import { Component, OnInit } from '@angular/core';
import {ArticleService} from "../services/article/article.service";
import {Router} from "@angular/router";
import {Article} from "../models/article.model";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-article-formulaire',
  templateUrl: './article-formulaire.component.html',
  styleUrls: ['./article-formulaire.component.scss']
})
export class ArticleFormulaireComponent implements OnInit {

  articleForm!: FormGroup;
  articlePreview$!: Observable<Article>;
  categorieform = new FormControl('');
  categories!:Array<string>;

  constructor(private articleServices:ArticleService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.categories=this.articleServices.listCategorie;
    this.articleForm = this.fb.group({
      titre: [null, Validators.required],
      listCategories: this.categorieform,
      author: [null , Validators.required],
      image: [null, Validators.required],
      description: [null, Validators.required],
      content1:[null, Validators.required],
      content2:[null, Validators.required],

    },{
      updateOn: 'blur'
    });


    this.articlePreview$ = this.articleForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        date: new Date(),

      }))
    );
  }


  addNewArticle(){
    this.articleServices.addNewArticle(this.articleForm.value);
    this.router.navigateByUrl("home");
  }

}
