import {EditarUsuarioComponent} from './editar-usuario/editar-usuario.component';
import {ListarUsuariosComponent} from './listar-usuarios/listar-usuarios.component';
import {CriarUsuarioComponent} from './criar-usuario/criar-usuario.component';
import {DashboardComponent} from './dashboard/dashboard.component';

import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [

  {path: '', component: DashboardComponent},

  // rotas usuarios:
  {path: 'criar-usuario', component: CriarUsuarioComponent},
  {path: 'listar-usuarios', component: ListarUsuariosComponent},
  {path: 'editar-usuario', component: EditarUsuarioComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
