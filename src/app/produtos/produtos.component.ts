import { Component, OnInit } from '@angular/core';
import { Produto } from './../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtosLidos: Produto[] = [];

  constructor(
    private service: ProdutoService
  ) { }

  ngOnInit() {
    this.produtosLidos = this.service.getProdutos();
  }

}
