import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuarioService } from '../../servicios/usuario.service';
import { Jugador } from '../../modelos/jugador';
import { Pareja } from '../../modelos/pareja';
import Swal from 'sweetalert2';
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
  division !:string
  private serviciosJugadores = inject(UsuarioService)
  constructor(private formBuilder: FormBuilder) {
    this.partidoForm = this.formBuilder.group({
      division: ['0', [Validators.required]],
      jugador1: ['0', [Validators.required]],
      jugador2: ['0', [Validators.required]],
      jugador3: ['0',[ Validators.required]],
      jugador4: ['0',[ Validators.required]],
      juegos1SetPareja1: [0,[ Validators.required]],
      juegos1SetPareja2: [0,[ Validators.required]],
      juegos2SetPareja1: [0,[ Validators.required]],
      juegos2SetPareja2: [0,[ Validators.required]],
      juegos3SetPareja1: [0],
      juegos3SetPareja2: [0],
      
    });
  }
  ngOnInit(): void {
    const selectDivision = document.querySelector('#division') as HTMLSelectElement;
    selectDivision.addEventListener('change', () => {
      this.division = selectDivision.value;
      this.cargarJugadoresDivision(parseInt(this.division));
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

  crearPartido() {
    if (this.partidoForm.valid) {
      let jugador1 = this.partidoForm.get('jugador1')!.value;
      let jugador2 = this.partidoForm.get('jugador2')!.value;
      let jugador3 = this.partidoForm.get('jugador3')!.value;
      let jugador4 = this.partidoForm.get('jugador4')!.value;
      let set1 = this.partidoForm.get('juegos1SetPareja1')!.value + ' - '+this.partidoForm.get('juegos1SetPareja2')!.value ;
      let set2 = this.partidoForm.get('juegos2SetPareja1')!.value + ' - '+this.partidoForm.get('juegos2SetPareja2')!.value ;
      let set3 = this.partidoForm.get('juegos3SetPareja1')!.value + ' - '+this.partidoForm.get('juegos3SetPareja2')!.value ;
      
      this.serviciosJugadores.crearPartido(jugador1,jugador2,jugador3,jugador4,set1,set2,set3,parseInt(this.division)).subscribe({
        next:(data) => {
          console.log('Partido creado con éxito:', data);
          Swal.fire({
            icon: "success",
            title: "Partido creado exitosamente",
            showConfirmButton: false,
            timer: 1500
          });
          this.partidoForm.reset()
        },
        error:(error) => {
          console.error('Error al crear partido:', error);
          Swal.fire({
            icon: "error",
            title: "No se ha podido crear el partido",
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
    }
  }
}
