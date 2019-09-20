import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-painel-simples',
  templateUrl: './painel-simples.component.html',
  styleUrls: ['./painel-simples.component.css']
})
export class PainelSimplesComponent implements OnInit {

  @Input() titulo = 'informe aqui o título';
  @Input() col = '6';
  @Input() tipo = 'info';

  constructor() { }

  ngOnInit() {
  }

}
