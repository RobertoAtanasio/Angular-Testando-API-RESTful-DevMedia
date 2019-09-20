import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-livros-component',
  templateUrl: './lista-livros-component.component.html',
  styleUrls: ['./lista-livros-component.component.css']
})
export class ListaLivrosComponentComponent implements OnInit {

  public livros = [
    'Como morrem os pobres e outros ensaios',
    'A revolução dos bichos',
    '1988'
  ];

  constructor() { }

  ngOnInit() {
  }

}
