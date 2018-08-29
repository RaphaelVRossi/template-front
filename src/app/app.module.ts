import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {CookieService} from 'angular2-cookie/services/cookies.service';

import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';

import {MessageService} from 'primeng/components/common/messageservice';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {PanelModule} from 'primeng/panel';
import {ButtonModule} from 'primeng/button';
import {GrowlModule} from 'primeng/growl';
import {PasswordModule} from 'primeng/password';
import {CalendarModule} from 'primeng/calendar';
import {CheckboxModule} from 'primeng/checkbox';
import {PickListModule} from 'primeng/picklist';
import {ChartModule} from 'primeng/chart';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {DialogModule} from 'primeng/dialog';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputMaskModule} from 'primeng/inputmask';

import {AppComponent} from './app.component';
import {TopoComponent} from './topo/topo.component';
import {MenuComponent} from './menu/menu.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FooterComponent} from './footer/footer.component';

import {routing} from './app.routes';
import {CriarUsuarioComponent} from './criar-usuario/criar-usuario.component';
import {ListarUsuariosComponent} from './listar-usuarios/listar-usuarios.component';
import {EditarUsuarioComponent} from './editar-usuario/editar-usuario.component';
import {ToastrModule} from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    MenuComponent,
    DashboardComponent,
    FooterComponent,
    CriarUsuarioComponent,
    ListarUsuariosComponent,
    EditarUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    ToastrModule.forRoot(),

    TableModule,
    DropdownModule,
    InputTextModule,
    PanelModule,
    ButtonModule,
    GrowlModule,
    PasswordModule,
    CalendarModule,
    CheckboxModule,
    PickListModule,
    ChartModule,
    ConfirmDialogModule,
    DialogModule,
    RadioButtonModule,
    InputMaskModule,
    MessageModule,
    MessagesModule
  ],
  providers: [MessageService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
