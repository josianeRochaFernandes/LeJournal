import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleListCategorieComponent } from './article-list-categorie.component';

describe('ArticleListCategorieComponent', () => {
  let component: ArticleListCategorieComponent;
  let fixture: ComponentFixture<ArticleListCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleListCategorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleListCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
