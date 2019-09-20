import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip-example',
  templateUrl: './tooltip-example.component.html',
  styleUrls: ['./tooltip-example.component.css']
})
export class TooltipExampleComponent implements OnInit {

  public visivelOK = false;
  public mouse = { x: 0, y: 0 };

  constructor() { }

  ngOnInit() {
  }

  alteraPosicaoDaTooltip(x: number, y: number) {
    this.mouse = { x, y };
  }

  exibeTooltip() {
    this.visivelOK = true;
  }

  escondeTooltip() {
    this.visivelOK = false;
  }
}
