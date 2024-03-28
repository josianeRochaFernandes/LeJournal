import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AcceuilComponent} from "./acceuil/acceuil.component";
import {ArticleComponent} from "./article/article.component";
import {ArticleListCategorieComponent} from "./article-list-categorie/article-list-categorie.component";
import {ContactComponent} from "./contact/contact.component";
import {ArticleFormulaireComponent} from "./article-formulaire/article-formulaire.component";

const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component: AcceuilComponent},
  {path:'articles/:id', component: ArticleComponent},
  {path:'articles/category/:categorie', component: ArticleListCategorieComponent},
  {path:'contact', component: ContactComponent},
  {path:'article/new', component: ArticleFormulaireComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
