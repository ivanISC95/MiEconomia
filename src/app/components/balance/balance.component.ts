import { Component } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';
import { iAhorros } from 'src/app/service/iAhorros';
import { iGastos } from 'src/app/service/iGastos';
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
  igasto:iGastos[];
  constructor(
    private crudService:CrudService    
    ){
      this.iahorro = [];
      this.igasto = [];
    }

  ngOnInit():void{
    this.iahorro = this.crudService.getAhorroLocal();    
    this.igasto = this.crudService.getGastosLocales();
    //console.log(this.iahorro[0].ahorro);
    /* datos de servidor mysql
    this.crudService.vAhorrosTotales().subscribe(resp => {this.Ahorros = resp});  
    this.crudService.vPrestamosDebe().subscribe(resp => {this.PrestamosDebe = resp});
    this.crudService.vCantidades().subscribe(resp => {this.Cantidades = resp});
    */
  }
}
