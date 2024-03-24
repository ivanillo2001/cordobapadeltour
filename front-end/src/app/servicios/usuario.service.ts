import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Usuario } from '../modelos/usuario';
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
}
