import { Injectable } from '@angular/core';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor() { }

  getProdutos() {
    const produtos: Produto[] = [];
    const produto = new Produto();
    produto.id = 1;
    produto.nome = 'Macarrão';
    produtos.push(produto);

    const produto2 = new Produto();
    produto2.id = 2;
    produto2.nome = 'Carne Bovina';
    produtos.push(produto2);

    return produtos;
  }
}
