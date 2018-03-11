import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  @Input() _nomeInput:string
  _nome:string;
  _times:string[];

  constructor() { 
    this._nome = 'Jesus Cristo';
    this._times = ['Santos','São Paulo','Fluminense'];
  }

  ngOnInit() {
  }

}
