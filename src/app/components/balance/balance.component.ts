import { Component } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';


@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent {
  Ahorros:any;
  PrestamosDebe:any;
  Cantidades:any;
  constructor(private crudService:CrudService){}

  ngOnInit():void{
    this.crudService.vAhorrosTotales().subscribe(resp => {this.Ahorros = resp});  
    this.crudService.vPrestamosDebe().subscribe(resp => {this.PrestamosDebe = resp});
    this.crudService.vCantidades().subscribe(resp => {this.Cantidades = resp});
  }
}
