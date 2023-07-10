import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getEmpresas(nombre: string = '') {
    return this.http.get<any[]>(`${this.baseUrl}/empresas/?nombre=${nombre}`);
  }

  postEmpresa(data: {nombre: string, direccion: string, RUT: string, telefono: string}) {
    return this.http.post(`${this.baseUrl}/empresas/`, data);
  }

  getEmpleados(nombre_completo: string = '') {
    return this.http.get<any[]>(`${this.baseUrl}/empleados/?nombre_completo=${nombre_completo}`);
  }

  postEmpleado(data: {empresa: string, nombre_completo: string, RUT: string, email: string}) {
    return this.http.post(`${this.baseUrl}/empleados/`, data);
  }
  
  getTodasEmpresas() {
    return this.http.get<any[]>(`${this.baseUrl}/empresas/`);
  }
}
