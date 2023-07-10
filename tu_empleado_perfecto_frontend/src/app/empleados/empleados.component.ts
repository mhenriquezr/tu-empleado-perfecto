import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  empleados: any;
  filtroNombre: string = '';
  
  constructor(private apiService: ApiService) { }

  empresas: any[] = [];

  ngOnInit(): void {
      this.getEmpleados();
      this.apiService.getTodasEmpresas().subscribe((response: any) => {
          this.empresas = response;
      });
  }

  filtroEmpresa: string = '';

  getEmpleados(): void {
    this.apiService.getEmpleados().subscribe((response: any) => {
      const empleados = response;
      if (this.filtroEmpresa) {
        this.empleados = empleados.filter((empleado: any) =>
          empleado.empresa.toLowerCase() === this.filtroEmpresa.toLowerCase()
        );
      } else {
        this.empleados = empleados;
      }
    });
  }

  limpiarFiltro(): void {
    this.filtroEmpresa = '';
    this.getEmpleados();
  }

  crearEmpleado(empresa: string, nombre_completo: string, RUT: string, email: string): void {
    this.apiService.postEmpleado({empresa, nombre_completo, RUT, email}).subscribe(() => {
      // Recargar la lista de empleados después de la creación de uno nuevo
      this.getEmpleados();
    });
  }
}
