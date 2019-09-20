import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../produto';

@Component({
  selector: 'app-editar-produtos',
  templateUrl: './editar-produtos.component.html',
  styleUrls: ['./editar-produtos.component.css']
})
export class EditarProdutosComponent implements OnInit {

  public produto: Produto;
  public id: number;

  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    // this.id = this.route.snapshot.params['id'];
    // console.log('>>>', this.id);
    this.produto = new Produto();
    this.produto.id = 1;
    this.produto.nome = 'Macarrão';
  }

  change() {
    alert('Alterou');
  }

  salvar() {
    this.produto.nome = this.produto.nome.toUpperCase();
    alert(this.produto.nome);
  }

  get debugar() {
    return JSON.stringify(this.produto);
  }
}
