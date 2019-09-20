import { Component } from '@angular/core';
import { Produto } from './produto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'minha-primeira-aplicacao';
  public exibirConteudo = false;

  produtosX: Produto[] = [];

  constructor() {
    const p = new Produto();
    p.id = 1;
    p.nome = 'Macarrão';
    this.produtosX.push(p);
  }

  public toggleConteudo() {
    this.exibirConteudo = !this.exibirConteudo;
  }
}
