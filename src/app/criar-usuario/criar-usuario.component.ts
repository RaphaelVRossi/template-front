import {UsersService} from '../services/users.service';
import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from '../model/user.model';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-criar-usuario',
  templateUrl: './criar-usuario.component.html',
  styleUrls: ['./criar-usuario.component.css']
})
export class CriarUsuarioComponent implements OnInit {

  @ViewChild('form')
  form: NgForm;

  tipo_usuario: Array<any>;

  user = new User('', '', '', '', '', '', '', '');
  logNamePattern = '^[a-zA-Z@_.]*$';

  constructor(private userService: UsersService,
              private toast: ToastrService) {
  }

  ngOnInit() {
    this.listaTipoUsuarios();
  }

  listaTipoUsuarios() {
    this.userService.listRole().subscribe(response => {
      this.tipo_usuario = response;
    });
  }

  create() {

    console.log(this.user);

    this.userService.create(this.user).subscribe(response => {
      this.user = response;
      this.form.resetForm();

      this.toast.success('Usuário cadastrado com sucesso');
    }, err =>
      this.toast.error(err.error));
  }
}
