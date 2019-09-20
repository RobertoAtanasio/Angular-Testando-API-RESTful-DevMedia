import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caixa-de-texto-component',
  templateUrl: './caixa-de-texto-component.component.html',
  styleUrls: ['./caixa-de-texto-component.component.css']
})
export class CaixaDeTextoComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // public onKeyPress(evento) {
  //   console.log(evento.target);
  //   console.log(evento.target.value);
  //   console.log(evento.target.value.length);
  // }

  public contarCaracteres(texto: string) {
    console.log(texto);
    console.log(texto.length);
  }

}
