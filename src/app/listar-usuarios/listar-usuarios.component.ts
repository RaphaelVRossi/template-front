import {Component, OnInit} from '@angular/core';
import {UsersService} from '../services/users.service';

import {MessageService} from 'primeng/components/common/messageservice';
import {ConfirmationService} from 'primeng/api';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css'],
  providers: [ConfirmationService]
})
export class ListarUsuariosComponent implements OnInit {

  registros: any[];

  constructor(private confirmationService: ConfirmationService,
              private user: UsersService,
              private messageService: MessageService,
              private toast: ToastrService) {
  }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.user.findAll().subscribe(users => this.registros = users);
  }

  excluir(id, name) {
    this.confirmationService.confirm({
      message: 'Deseja excluir ' + name + ' ' + id + '?',
      header: 'Confirmação',
      icon: 'pi pi-exclamation-triangle',

      accept: () => {
        this.user.delete(id).subscribe(response => {

          this.listar();

          this.toast.success('Distributor excluído com sucesso');
        }, err => this.toast.error(err.error));
      }

    });
  }

  mudarStatus(id: number, status: number) {
    this.toast.error('Alterado');
  }
}
