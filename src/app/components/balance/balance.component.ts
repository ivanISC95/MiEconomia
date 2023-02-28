import { Component } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';
import { iAhorros } from 'src/app/service/iAhorros';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent {
  Ahorros:any;
  PrestamosDebe:any;
  Cantidades:any;
  iahorro:iAhorros[];
  constructor(
    private crudService:CrudService    
    ){
      this.iahorro = [];
    }

  ngOnInit():void{
    this.iahorro = this.crudService.getAhorroLocal();    

    /* datos de servidor mysql
    this.crudService.vAhorrosTotales().subscribe(resp => {this.Ahorros = resp});  
    this.crudService.vPrestamosDebe().subscribe(resp => {this.PrestamosDebe = resp});
    this.crudService.vCantidades().subscribe(resp => {this.Cantidades = resp});
    */
  }
}
