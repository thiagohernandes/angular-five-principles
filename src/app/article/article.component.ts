import { Component, OnInit, HostBinding } from '@angular/core';
import { Article } from '../article';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'row';
   votes: number;
   title: string;
   link: string;
   _article:Article;
   _articles:Article[];

   constructor(private _data:ArticlesService) {
    
   }
  
  ngOnInit() {
    this._data.article.subscribe(
      res => this._articles = res
    );
  }

  updateChangeArticle(){
    this._data.changeArticle(this._articles);
  }

   voteUp(article) {
    this._articles.forEach((item, index) => {
      if(item.title === article.title){
        this._articles[index].votes+=1;        
      }
    }); 
    this.updateChangeArticle();
   // this._article.votes += 1;
   return false; // page no refreshs
   }
  
   voteDown(article) {
    this._articles.forEach((item, index) => {
      if(item.title === article.title){
        this._articles[index].votes-=1;
      }
    }); 
    this.updateChangeArticle();
   // this._article.votes -= 1;
   return false;
  }

  // domain() is a utility function that extracts
 // the domain from a URL, which we'll explain shortly
 domain(article): string {
    try {
    // e.g. http://foo.com/path/to/bar
    const domainAndPath: string = article.link.split('//')[1];
    // e.g. foo.com/path/to/bar
    return domainAndPath.split('/')[0];
    } catch (err) {
    return null;
    }
 }

  
}