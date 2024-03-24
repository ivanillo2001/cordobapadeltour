import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { Usuario } from '../../modelos/usuario';
import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent implements OnInit{
  user!:string
  usuarios: Usuario[]=[]
  private usuarioService = inject(UsuarioService)
  constructor(private route:ActivatedRoute){}
  ngOnInit(): void {
    this.obtenerUsuarios()
    this.route.queryParams.subscribe(params => {
       this.user = params['user'];
      // Hacer lo que necesites con el usuario en este componente
      this.validarUsuario(this.user)
    });
  }
  obtenerUsuarios(): void {
    this.usuarioService.obtenerUsuarios()
      .subscribe(usuarios => this.usuarios = usuarios);
  }

  validarUsuario(usuario:string){
    let userValido = false
    this.usuarios.forEach(usuario => {
      if (usuario.user==this.user) {
        userValido = true
      }
    });
    return userValido
  }
}
