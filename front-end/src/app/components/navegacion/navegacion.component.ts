import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CookieService } from '../../servicios/cookie-service.service';
import { Usuario } from '../../modelos/usuario';
@Component({
  selector: 'app-navegacion',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navegacion.component.html',
  styleUrl: './navegacion.component.css',
})
export class NavegacionComponent implements OnInit {
  private router = inject(Router)
  private cookieService = inject(CookieService);
  usuarios: Usuario[] = [];
  ngOnInit(): void {
    this.comprobarUsuario();
  }
  comprobarUsuario() {
    let usuExiste = false;
    if (this.cookieService.cookieExists('nombreUsuario')) {
      usuExiste = true;
    }
    return usuExiste;
  }
  cerrarSesion(){
    this.cookieService.deleteCookie('nombreUsuario')
    this.router.navigate(['/home']);
  }
  irLogin(){
    this.router.navigate(['/login']);

  }
}
