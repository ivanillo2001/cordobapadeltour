import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuarioService } from '../../servicios/usuario.service';
import { Jugador } from '../../modelos/jugador';
import { Pareja } from '../../modelos/pareja';

@Component({
  selector: 'app-crear-partido',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './crear-partido.component.html',
  styleUrl: './crear-partido.component.css'
})
export class CrearPartidoComponent implements OnInit{
  partidoForm: FormGroup
  jugadores: Jugador[] = [];
  pareja1!: Pareja
  private serviciosJugadores = inject(UsuarioService)
  constructor(private formBuilder: FormBuilder) {
    this.partidoForm = this.formBuilder.group({
      division: ['0', [Validators.required]],
      jugador1: ['0', [Validators.required]],
      jugador2: ['0', [Validators.required]],
      jugador3: ['0',[ Validators.required]],
      jugador4: ['0',[ Validators.required]]
    });
  }
  ngOnInit(): void {
    const selectDivision = document.querySelector('#division') as HTMLSelectElement;
    selectDivision.addEventListener('change', () => {
      const division = selectDivision.value;
      this.cargarJugadoresDivision(parseInt(division));
    });
  }  
  cargarJugadoresDivision(idDivision:number){
    if (idDivision == 1) {
      this.serviciosJugadores.jugadoresPrimera().subscribe(
        (jugadores: Jugador[]) => {
          this.jugadores = jugadores;
        }
      );
    } else {
      this.serviciosJugadores.jugadoresSegunda().subscribe(
        (jugadores: Jugador[]) => {
          this.jugadores = jugadores;
        }
      );
    }
  }

}
