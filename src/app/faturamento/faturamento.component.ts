import { Component, OnInit, OnDestroy } from '@angular/core';
import { FaturamentoService } from './faturamento.service';

@Component({
  selector: 'app-faturamento',
  templateUrl: './faturamento.component.html',
  styleUrls: ['./faturamento.component.css']
})
export class FaturamentoComponent implements OnInit, OnDestroy {

  public faturamento;
  private inscricao;
  public houveErro = false;

  constructor(private faturamentoService: FaturamentoService) { }

  ngOnInit() {
    this.getFaturamento();
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  getFaturamento() {
    this.inscricao = this.faturamentoService.getFaturamento()
      .subscribe( dados => {
        this.faturamento = dados;
      }, () => {
        this.houveErro = true;
        console.log('>> houve erro >>');
      });
  }
}
