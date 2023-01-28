import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prestamos } from './Prestamos';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  //API: string = 'http://localhost:8080/prestamos/data.php'; // API PHP
  API: string = 'http://localhost:4000/'; // API EXPRESS & NODEJS
  constructor(private clientService:HttpClient) { }
  // Ver TODOS los prestamos
  vPrestamos(){
    //return this.clientService.get(this.API+'?prestamos'); // API 1 
    return this.clientService.get(this.API+'prestamos');
  }
  // Ver TODOS los prestamos en estatus DEBE
  vPrestamosDebe(){
    //return this.clientService.get(this.API+'?prestamosDebe'); // API 1 
    return this.clientService.get(this.API+'prestamosDebe');
  }
  vCantidades(){
    //return this.clientService.get(this.API+'?prestamosDebe'); // API 1 
    return this.clientService.get(this.API+'cantidades');
  }
  // Añadir prestamo
  spAddPrestamo(datosPrestamo:Prestamos):Observable<any>{
    //return this.clientService.post(this.API+'?SPaddPrestamo',datosPrestamo); // API 1 
    return this.clientService.post(this.API+'SPaddPrestamo',datosPrestamo);
  }
  // Prestamo pagado
  editPrestamo(data:any):Observable<any>{
    //return this.clientService.post(this.API+'?editPrestamo',data); // API 1 
    return this.clientService.put(this.API+'editPrestamo',data);
  }
  // Ahorros totales
  vAhorrosTotales(){
    //return this.clientService.get(this.API+'?ahorros'); // API 1 
    return this.clientService.get(this.API+'ahorros');
  }
  // Añadir Ahorro
  spAhorro(datosPrestamo:Prestamos):Observable<any>{
    //return this.clientService.get(this.API+'?ahorros'); // API 1 
    return this.clientService.post(this.API+'ahorro',datosPrestamo);
  }

}
