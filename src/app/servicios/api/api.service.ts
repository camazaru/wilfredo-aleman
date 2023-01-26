import { Injectable } from '@angular/core';
import {LoginI} from '../../modelos/login.interface'
import {ResponseI} from '../../modelos/response.interface'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { ListapacientesI } from '../../modelos/listapacientes.interface'
import { PacienteI } from '../../modelos/paciente.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

url:string = 'https://63d2b5531780fd6ab9cb4fd1.mockapi.io/'

  constructor(private http:HttpClient) { }

loginByEmail(form:LoginI):Observable<any>{
let direccion = this.url + "auth"
  return this.http.post<ResponseI>(direccion, form);
}

getAllcients():Observable<ListapacientesI[]> {
let direccion = this.url + "pacientes";

  return this.http.get<ListapacientesI[]>(direccion)
}

getSinglePacient(id:any):Observable<any>{
  let direccion = this.url + "pacientes?id=" + id
  return this.http.get<any>(direccion)
}


}
