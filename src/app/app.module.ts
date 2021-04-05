import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.route';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { HttpClientModule } from '@angular/common/http';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { NgBrazil } from 'ng-brazil' 
import { TextMaskModule } from 'angular2-text-mask';
import { CustomFormsModule } from 'ng2-validation';
import { NavegacaoModule } from './navegacao/navegacao.module';
import { AuthGuard } from './services/app.guard';
import { CadastroGuard } from './services/cadastro.guard';
import { FilmesComponent } from './demos/pipes/filmes/filmes.component';
import { FileSizePipe } from './demos/pipes/filmes/filesize.pipe';
import { ImageFormaterPipe } from './demos/pipes/filmes/image.pipe';
import { BarComponent } from './demos/bar-di-zones/bar/bar.component';
import { BarModule } from './demos/bar-di-zones/bar/bar.module';
import { BarServices } from './demos/bar-di-zones/bar/bar.service';
import { TodoComponent } from './demos/todo-list/todo.component';
import { TodoModule } from './demos/todo-list/todo.module';

export const BAR_PROVIDERS: Provider[] = [
  BarServices
];
@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent,
    SobreComponent,
    CadastroComponent,
    FilmesComponent,
    FileSizePipe,
    ImageFormaterPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    NgBrazil,
    CustomFormsModule,
    NavegacaoModule,
    AppRoutingModule,
    BarModule.forRoot({unidadeId:1000,unidadeToken:'token'}),
    TodoModule
  ],
  providers: [
    {provide: APP_BASE_HREF,useValue:'/'}, //prefixo de rota
     AuthGuard,
     CadastroGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
