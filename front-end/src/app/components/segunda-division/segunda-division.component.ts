import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Jugador } from '../../modelos/jugador';
import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-segunda-division',
  standalone: true,
  imports: [],
  templateUrl: './segunda-division.component.html',
  styleUrl: './segunda-division.component.css'
})
export class SegundaDivisionComponent implements OnInit{
  private servicio = inject(UsuarioService)
  ngOnInit(): void {
    this.cargarJugadores()
  }

  cargarJugadores(){
    this.servicio.jugadoresSegunda().subscribe(
      (jugadores:Jugador[])=>{
        const zonaJugadores = document.querySelector("#jugadores") as HTMLDivElement
        jugadores.forEach(jugador => {
          const nombre = document.createElement("h2");
          nombre.textContent = jugador.nombre;
          zonaJugadores.append(nombre);
          const puntos = document.createElement("h3");
          puntos.textContent = jugador.puntos.toString() +' puntos'
          zonaJugadores.append(puntos);
          const imagen = document.createElement("img")
          imagen.classList.add("mt-3")
          imagen.src="../../../assets/imagen/imagen.jpg"
          imagen.width=200
          const cardJugador = document.createElement("div")
          cardJugador.classList.add("cardJugador")
          cardJugador.classList.add("col-md-6")
          cardJugador.classList.add("m-md-5")
          cardJugador.classList.add("mt-3")
          cardJugador.append(imagen)
          cardJugador.append(nombre)
          cardJugador.append(puntos)
          zonaJugadores.append(cardJugador)
          zonaJugadores.style.margin="0 auto"
          zonaJugadores.style.justifyContent="center"
        });
      }
    )
  }

}
