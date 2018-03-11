import { Component } from '@angular/core';
import { JokeComponent } from './joke/joke.component';
import { JokeService } from './joke.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  _jokeComponent = new JokeComponent();
  _teste:string;

  constructor(private _jokeService:JokeService){
    this._teste = 'TESTE @INPUT';
  }
  
  title = 'app';
  jokeTitle = this._jokeComponent.nome;
  jokeIdade = this._jokeService.getIdade();
}
