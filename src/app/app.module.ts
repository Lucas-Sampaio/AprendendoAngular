import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.route';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { HomeComponent } from './navegacao/home/home.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';
import { ProdutoService } from './produtos/produtos.service';
import { HttpClientModule } from '@angular/common/http';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { NgBrazil } from 'ng-brazil' 
import { TextMaskModule } from 'angular2-text-mask';
import { CustomFormsModule } from 'ng2-validation';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    ContatoComponent,
    SobreComponent,
    ListaProdutoComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    NgBrazil,
    CustomFormsModule,
    [RouterModule.forRoot(rootRouterConfig)]
  ],
  providers: [
    ProdutoService, 
    {provide: APP_BASE_HREF,useValue:'/'} //prefixo de rota
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
