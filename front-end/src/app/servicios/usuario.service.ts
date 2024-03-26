import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Usuario } from '../modelos/usuario';
import { Division } from '../modelos/divisiones';
import { Jugador } from '../modelos/jugador';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url = "http://localhost:3000"
  private http = inject(HttpClient)
  
  //validar usuario
  validarUsuario(user:string, password:string):Observable<boolean>{
    return this.http.post(`${this.url}/usuario`,{user,password}).pipe(
      map((response: any) => {
        return response.valido === true;
      })
    );
  }

  obtenerUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url+"/usuarios");
  }

  obtenerDivisiones(): Observable<Division[]> {
    return this.http.get<Division[]>(this.url+"/divisiones");
  }

  crearJugador(nombre:string,puntos:number,division:number){
    return this.http.post(this.url+"/jugadores/crearJugador",{nombre,puntos,division});
  }

  jugadoresPrimera(): Observable<Jugador[]> {
    return this.http.get<Jugador[]>(this.url+"/jugadores/primeraDivision");
  }

}
