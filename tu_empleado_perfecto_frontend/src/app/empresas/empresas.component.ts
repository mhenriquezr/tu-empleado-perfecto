import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {

  empresas: any;
  filtroNombre: string = '';
  filtroEmpresa: string = '';

  
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getEmpresas();
  }

  getEmpresas(): void {
    this.apiService.getEmpresas().subscribe((response: any) => {
      const empresas = response;
      if (this.filtroNombre) {
        this.empresas = empresas.filter((empresa: any) =>
          empresa.nombre.toLowerCase().includes(this.filtroNombre.toLowerCase())
        );
      } else {
        this.empresas = empresas;
      }
    });
  }
  

  crearEmpresa(nombre: string, direccion: string, RUT: string, telefono: string): void {
    this.apiService.postEmpresa({nombre, direccion, RUT, telefono}).subscribe(() => {
      // Recargar la lista de empresas después de la creación de una nueva
      this.getEmpresas();
    });
  }
}