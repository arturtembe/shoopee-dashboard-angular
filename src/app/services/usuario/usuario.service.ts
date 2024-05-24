import { Injectable } from '@angular/core';


import { HttpClient,HttpHeaders } from '@angular/common/http';

import { map, Observable } from 'rxjs';
import { Usuario } from '../../interfaces/Usuario';
import endpoint from '../../helpers/endpoint.helpers';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  //private apiUrl_LOGIN='http://localhost:3000/db/controllers/shoopee/usuarioController/loginUser.php';
  //private apiUrl_REGISTER='http://localhost:3000/db/controllers/shoopee/usuarioController/registerUser.php';
  
  private apiUrl_TOKEN='http://localhost:3000/db/controllers/shoopee/usuarioController/getUserAPI.php';

  constructor(private http:HttpClient) { }

  loginUsuario(usuario:any):Observable<Usuario[]>{

    return this.http.post<Usuario[]>(endpoint.login,usuario)
  }

  registerUsuario(usuario:any):Observable<Usuario[]>{

    return this.http.post<Usuario[]>(endpoint.register,usuario)
  }

  tokenUsuario(token:string|null):Observable<Usuario[]>{

    return this.http.get<Usuario[]>(`${this.apiUrl_TOKEN}?token=${token}`);
  }


}
