import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CadastroComponent } from './paginas/cadastro/cadastro.component';
import { ConsultaComponent } from './paginas/consulta/consulta.component';
import { ExclusaoComponent } from './paginas/exclusao/exclusao.component';
import { ListagemComponent } from './paginas/listagem/listagem.component';

export const routes: Routes = [
    {path: '', component: MainComponent},
    {path: 'cadastro', component: CadastroComponent, title: 'Cadastro'},
    {path: 'consulta', component: ConsultaComponent, title: 'Consulta'},
    {path: 'exclusao', component: ExclusaoComponent, title: 'Exclusão'},
    {path: 'listagem', component: ListagemComponent, title: 'Listagem'},
    {path:'**', redirectTo:''}
];
