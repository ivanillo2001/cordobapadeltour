import { Component, OnInit, inject } from '@angular/core';
import { UsuarioService } from '../../servicios/usuario.service';
import { Jugador } from '../../modelos/jugador';
@Component({
  selector: 'app-primera-division',
  standalone: true,
  imports: [],
  templateUrl: './primera-division.component.html',
  styleUrl: './primera-division.component.css'
})
export class PrimeraDivisionComponent implements OnInit{
  private servicio = inject(UsuarioService)
  ngOnInit(): void {
    this.cargarJugadores()
  }

  cargarJugadores(){
    this.servicio.jugadoresPrimera().subscribe(
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
          cardJugador.classList.add("col-md-5")
          cardJugador.classList.add("m-md-4")
          cardJugador.classList.add("mt-3")
          cardJugador.style.textAlign='center'
          cardJugador.style.backgroundColor = "#C2E0EC";
          cardJugador.style.borderRadius = "15px";
          cardJugador.style.color="black"
          cardJugador.append(imagen)
          cardJugador.append(nombre)
          cardJugador.append(puntos)
          zonaJugadores.append(cardJugador)
        });
      }
    )
  }

}
