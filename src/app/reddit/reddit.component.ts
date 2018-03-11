import { Component, OnInit, Input } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { Article } from '../article';

@Component({
  selector: 'app-reddit',
  templateUrl: './reddit.component.html',
  styleUrls: ['./reddit.component.css']
})
export class RedditComponent implements OnInit {

  @Input() titulo:String;
  _articles:Article[];
  
  constructor(private _data:ArticlesService) { }

  ngOnInit() {
    this._data.article.subscribe(
      res => this._articles = res
    );
  }

  updateChangeArticle(){
    this._data.changeArticle(this._articles);
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    this._articles.push(new Article(title.value,link.value,11));
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    return false;
  }

}
