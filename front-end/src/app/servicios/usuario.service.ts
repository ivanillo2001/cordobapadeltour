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
  validarUsuario(user: string, password: string): Observable<any> {
    return this.http.post(`${this.url}/usuario`, { user, password }).pipe(
      map((response: any) => {
        if (response.valido === true) {
          // Si las credenciales son válidas, devolvemos un objeto que contiene el valor booleano "valido" y el rol del usuario
          return { valido: true, rol: response.rol };
        } else {
          // Si las credenciales no son válidas, devolvemos solo un objeto que indica que las credenciales son inválidas
          return { valido: false };
        }
      })
    );
  }

  obtenerUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url+"/usuarios");
  }

  obtenerJugador(nombre:string):Observable<Jugador[]>{
    return this.http.post<Jugador[]>(this.url+"/jugadores/obtenerJugador",{nombre});
  }
  eliminarJugador(idJugador:number){
    return this.http.post(this.url+'/jugadores/eliminarJugador',{idJugador})
  }
  crearPareja(idJugador1:number, idJugador2:number){
    return this.http.post(this.url+'/jugadores/crearPareja',{idJugador1,idJugador2})
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
  jugadoresSegunda(): Observable<Jugador[]> {
    return this.http.get<Jugador[]>(this.url+"/jugadores/segundaDivision");
  }

}
