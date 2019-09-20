import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ConsultaService } from './consulta.service';
import { Consulta } from '../interfaces/consulta';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit, OnDestroy {

  public consultas: Consulta;
  public inscricao;
  public houveErro = false;

  // consultas = {
  //   realizadas : [
  //       { especialidade : 'Cardiologia', quantidade : 20 },
  //       { especialidade : 'Clínica Geral', quantidade : 30 },
  //       { especialidade : 'Dermatologia', quantidade : 14 },
  //       { especialidade : 'Gastroenterologia', quantidade : 10 },
  //       { especialidade : 'Pediatria', quantidade : 11 }
  //   ],
  //   marcadas : [
  //       { especialidade : 'Cardiologia', quantidade : 19 },
  //       { especialidade : 'Clínica Geral', quantidade : 28 },
  //       { especialidade : 'Dermatologia', quantidade : 13 },
  //       { especialidade : 'Gastroenterologia', quantidade : 8 },
  //       { especialidade : 'Pediatria', quantidade : 10 }
  //   ]
  // };

  constructor(private consultaService: ConsultaService) { }

  ngOnInit() {
    this.getConsulta();
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  public getConsulta() {
    this.inscricao = this.consultaService.getConsulta()
      .subscribe((dados: Consulta) => {
        this.consultas = dados;
      }, () => {
        this.houveErro = true;
        console.log('>>>> Error');
      });
  }

}
