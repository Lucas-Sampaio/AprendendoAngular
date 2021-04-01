import { NgModule } from "@angular/core";

import { Routes, RouterModule } from "@angular/router";
import { CadastroComponent } from "./demos/reactiveForms/cadastro/cadastro.component";
import { ContatoComponent } from "./institucional/contato/contato.component";
import { SobreComponent } from "./institucional/sobre/sobre.component";
import { HomeComponent } from "./navegacao/home/home.component";
import { NotfoundComponent } from "./navegacao/notfound/notfound.component";


 const rootRouterConfig: Routes = [
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path: 'home',component:HomeComponent},
    {path: 'contato',component:ContatoComponent},
    {path: 'sobre',component:SobreComponent},
    {path: 'cadastro',component:CadastroComponent},
    {path: 'produtos',
    loadChildren: () => import('./demos/arquitetura-componente/produto.module').
    then(m => m.ProdutoModule)},

    {path:'**',component:NotfoundComponent},
];

@NgModule({
    imports:[
        RouterModule.forRoot(rootRouterConfig,{ enableTracing : true })
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{}