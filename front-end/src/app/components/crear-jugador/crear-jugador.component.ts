import { Component, OnInit, inject } from '@angular/core';
import { CookieService } from '../../servicios/cookie-service.service';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../servicios/usuario.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-crear-jugador',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './crear-jugador.component.html',
  styleUrl: './crear-jugador.component.css'
})
export class CrearJugadorComponent implements OnInit{
  jugadorForm: FormGroup
  constructor(private formBuilder: FormBuilder) {
    this.jugadorForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      puntos: ['', [Validators.required]],
      division: ['',[ Validators.required]]
    });
  }
  private cookieService = inject(CookieService)
  private servicioUsuarios = inject(UsuarioService)
  ngOnInit(): void {
    this.validarSesionIniciada()
    this.cargarDivisiones()
  }

  validarSesionIniciada(){
    let sesionIniciada= false
    if (this.cookieService.cookieExists('nombreUsuario')) {
      sesionIniciada= true
    }
    return sesionIniciada
  }

  cargarDivisiones() {
    this.servicioUsuarios.obtenerDivisiones().subscribe(
        (divisiones: any[]) => {
            const selectDivision = document.querySelector("#divisiones") as HTMLSelectElement;
            selectDivision.innerHTML = ''; // Limpiar las opciones actuales
            divisiones.forEach(division => {
                const option = document.createElement("option");
                option.value = division.idDivision;
                option.textContent = division.nombre;
                selectDivision.appendChild(option);
            });
        },
        error => {
            console.error("Error al cargar las divisiones:", error);
        }
    );
}

  crearJugador() {
    if (this.jugadorForm.valid) {
      const nombre = this.jugadorForm.get('nombre')!.value;
      const puntos = this.jugadorForm.get('puntos')!.value;
      const division = this.jugadorForm.get('division')!.value;

      this.servicioUsuarios.crearJugador(nombre, puntos, division).subscribe(
        (data) => {
          console.log('Jugador creado con éxito:', data);
        },
        (error) => {
          console.error('Error al crear jugador:', error);
        }
      );
    }
    
  }

  guardarJugador(nombre: string, puntos: string, division: string) {
    let puntosInteger = parseInt(puntos);
    let divisionInteger = parseInt(division);
    this.servicioUsuarios.crearJugador(nombre, puntosInteger, divisionInteger)
      .subscribe(
        (data) => {
          console.log('Jugador creado con éxito:', data);
        },
        (error) => {
          console.error('Error al crear jugador:', error);
        }
      );
  }
  
  
}
