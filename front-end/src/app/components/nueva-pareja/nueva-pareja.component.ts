import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../servicios/usuario.service';
import { Jugador } from '../../modelos/jugador';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-nueva-pareja',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './nueva-pareja.component.html',
  styleUrl: './nueva-pareja.component.css'
})
export class NuevaParejaComponent {
  divisionForm: FormGroup;
  parejaForm: FormGroup;
  jugadores: Jugador[] = [];
  private division!:number
  constructor(private formBuilder: FormBuilder, private serviciosJugadores: UsuarioService) {
    this.divisionForm = this.formBuilder.group({
      division: ['1', [Validators.required]],
    });

    this.parejaForm = this.formBuilder.group({
      jugador1: ['0', [Validators.required]],
      jugador2: ['0', [Validators.required]]
    });
  }

  buscarJugadores() {
    let zonaJugadores = document.querySelector('#zonaJugadores');
    zonaJugadores?.classList.remove('d-none');

    this.division = this.divisionForm.get('division')?.value;
    if (this.division == 1) {
      
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

  actualizarParejas() {
    let idJugador1 = this.parejaForm.get('jugador1')?.value;
    let idJugador2 = this.parejaForm.get('jugador2')?.value;
    this.serviciosJugadores.modificarPareja(idJugador1,idJugador2).subscribe(
      (result)=>{
      },
      (error)=>{
      }
    )
    this.crearPareja(idJugador1,idJugador2);
  }


  crearPareja(idJugador1:number,idJugador2:number){
    this.serviciosJugadores.crearPareja(idJugador1,idJugador2,this.division).subscribe(
      (result)=>{
        Swal.fire({
          icon: "success",
          title: "Pareja creada con éxito",
          showConfirmButton: false,
          timer: 1500
        });
      },
      (error)=>{
        Swal.fire({
          icon: "error",
          title: "No se pudo crear la pareja",
          showConfirmButton: false,
          timer: 1500
        });
      }
    )
  }
}
