import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {

  public menuAberto = false;

  constructor() { }

  ngOnInit() {
  }

  abrirFecharMenu() {
    this.menuAberto = !this.menuAberto;
  }
}
