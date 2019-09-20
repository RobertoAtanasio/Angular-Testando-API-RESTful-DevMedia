import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ResumoService } from './resumo.service';
import { Resumo } from '../interfaces/resumo';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./resumo.component.css']
})
export class ResumoComponent implements OnInit, OnDestroy {

  public resumo: Resumo;
  public inscricao;
  public houveErro = false;

  // resumo = {
  //   consultas: {
  //     consultas_30dias_anteiores: 87,
  //     consultas_30dias_posteriores: 79
  //   },
  //   faturamento: {
  //     anterior: {
  //       valor: 100000,
  //       comparativo: 19
  //     },
  //     previsao: {
  //       valor: 90000,s
  //       comparativo: -10
  //     }
  //   }
  // }

  constructor(private resumoService: ResumoService) { }

  ngOnInit() {
    this.getResumo();
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  public getResumo() {
    this.inscricao = this.resumoService.getResumo()
      .subscribe((dados: Resumo) => {
        this.resumo = dados;
      }, () => {
        this.houveErro = true;
        console.log('>>>> Error');
      });
  }
}
