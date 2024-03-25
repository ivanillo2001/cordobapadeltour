import { Component, OnInit, inject } from '@angular/core';
import { CookieService } from '../../servicios/cookie-service.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-crear-jugador',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './crear-jugador.component.html',
  styleUrl: './crear-jugador.component.css'
})
export class CrearJugadorComponent implements OnInit{
  private cookieService = inject(CookieService)
  ngOnInit(): void {
    this.validarSesionIniciada()
  }

  validarSesionIniciada(){
    let sesionIniciada= false
    if (this.cookieService.cookieExists('nombreUsuario')) {
      sesionIniciada= true
    }
    return sesionIniciada
  }
}
