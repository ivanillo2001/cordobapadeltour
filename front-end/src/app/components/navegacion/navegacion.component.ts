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
    this.validarSesionIniciada()
    
  }
  
  comprobarAdmin() {
    let usuExiste = false;
    if (this.cookieService.getCookie('rol')=='admin'){
      usuExiste = true;
    }
    return usuExiste;
  }

  validarSesionIniciada(){
    let sesionIniciada = false
    if (this.comprobarAdmin()||this.comprobarJugador()) {
      sesionIniciada=true
    }
    return sesionIniciada
  }
  comprobarJugador(){
    let usuExiste = false;
    if (this.cookieService.getCookie('rol')=='jugador'){
      usuExiste = true;
    }
    return usuExiste;
  }
  cerrarSesion(){
    this.cookieService.deleteCookie('rol')
    this.router.navigate(['/home']);
  }
  irLogin(){
    this.router.navigate(['/login']);

  }
}
