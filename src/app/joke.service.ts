import { Injectable } from '@angular/core';

@Injectable()
export class JokeService {

  _idade:number;

  constructor() { 
    this._idade = 40;
  }

  getIdade(){
    return this._idade;
  }

}
