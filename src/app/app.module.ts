import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { ListaLivrosComponentComponent } from './lista-livros-component/lista-livros-component.component';
import { ClickMeComponent } from './click-me/click-me.component';
import { CaixaDeTextoComponentComponent } from './caixa-de-texto-component/caixa-de-texto-component.component';
import { TooltipExampleComponent } from './tooltip-example/tooltip-example.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';

// import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from './produtos/produtos.component';
import { EditarProdutosComponent } from './editar-produtos/editar-produtos.component';

import { FormsModule } from '@angular/forms';
import { UppercaseDirective } from './uppercase.directive';
import { PainelSimplesComponent } from './painel-simples/painel-simples.component';
import { BarraNavegacaoComponent } from './barra-navegacao/barra-navegacao.component';
import { MenuLateralComponent } from './barra-navegacao/menu-lateral/menu-lateral.component';
import { ResumoComponent } from './resumo/resumo.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { ConsultaPorEspecialidadeComponent } from './consulta/consulta-por-especialidade/consulta-por-especialidade.component';
import { FalhaAcessoServidorComponent } from './falha-acesso-servidor/falha-acesso-servidor.component';
import { FaturamentoComponent } from './faturamento/faturamento.component';

// const appRoutes: Routes = [
//   { path: 'produtos', component: ProdutosComponent},
//   { path: 'produtos/:id', component: EditarProdutosComponent},
//   { path: 'resumo', component: ResumoComponent},
//   { path: 'consulta', component: ConsultaComponent},
//   { path: '**', redirectTo: 'resumo'}
// ]

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    ListaLivrosComponentComponent,
    ClickMeComponent,
    CaixaDeTextoComponentComponent,
    TooltipExampleComponent,
    ListaProdutosComponent,
    ProdutosComponent,
    EditarProdutosComponent,
    UppercaseDirective,
    PainelSimplesComponent,
    BarraNavegacaoComponent,
    MenuLateralComponent,
    ResumoComponent,
    ConsultaComponent,
    ConsultaPorEspecialidadeComponent,
    FalhaAcessoServidorComponent,
    FaturamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// providers: [ProdutoService],
// providers: [{provide: ProdutoService, useClass: ProdutoService}],
