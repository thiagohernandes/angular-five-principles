import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxJs/BehaviorSubject';
import { Article } from './article';

@Injectable()
export class ArticlesService {

  private articles = new BehaviorSubject<Article[]>(
                                [new Article('Angular 2', 'http://angular.io', 10),
                                new Article('Fullstack', 'http://fullstack.io', 5),
                                new Article('Angular Homepage', 'http://angular.io', 19)]);

  article = this.articles.asObservable();
  
  constructor() {
    
  }
  
  changeArticle(article){
    this.articles.next(article);
  }
}
