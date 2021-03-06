import { NgModule } from "@angular/core";

import { Routes, RouterModule } from "@angular/router";
import { FilmesComponent } from "./demos/pipes/filmes/filmes.component";
import { CadastroComponent } from "./demos/reactiveForms/cadastro/cadastro.component";
import { TodoComponent } from "./demos/todo-list/todo.component";
import { ContatoComponent } from "./institucional/contato/contato.component";
import { SobreComponent } from "./institucional/sobre/sobre.component";
import { HomeComponent } from "./navegacao/home/home.component";
import { NotfoundComponent } from "./navegacao/notfound/notfound.component";
import { AuthGuard } from "./services/app.guard";
import { CadastroGuard } from "./services/cadastro.guard";


const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'contato', component: ContatoComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'cadastro', component: CadastroComponent, canDeactivate: [CadastroGuard] },
    {
        path: 'produtos',
        loadChildren: () => import('./demos/arquitetura-componente/produto.module').
            then(m => m.ProdutoModule)
    },
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module')
        .then(m => m.AdminModule),
        canLoad:[AuthGuard], //informa se pode carregar o modulo e apenas pra lazyload
        canActivate: [AuthGuard] //informa se pode acessar
    },
    { path: 'filmes', component: FilmesComponent },
    { path: 'todo', component: TodoComponent },
    { path: '**', component: NotfoundComponent },
];

@NgModule({
    imports:[
        RouterModule.forRoot(rootRouterConfig,{ enableTracing : true })
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }