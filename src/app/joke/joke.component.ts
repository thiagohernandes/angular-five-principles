import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  public nome:string = "Joke String";
  public _idade:number;
  _jokes:any;
  _dontShow:boolean;

  constructor() {
    this._jokes = [];
    this._dontShow = false;
   }


  ngOnInit() {
    this.fillJokes();
  }

  fillJokes(){
    this._jokes.push({"id": 1, "name": "joke one"});
    this._jokes.push({"id": 2, "name":"joke two"})
    this._jokes.push({"id": 3, "name": "joke thre"})
  }

}
