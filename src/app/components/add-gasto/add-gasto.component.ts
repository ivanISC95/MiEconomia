import { Component } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/service/crud.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-gasto',
  templateUrl: './add-gasto.component.html',
  styleUrls: ['./add-gasto.component.css']
})
export class AddGastoComponent {
  formularioGasto : FormGroup;

  constructor(
    public formulario:FormBuilder,
    private crudService : CrudService,
    private router : Router
  ){
    this.formularioGasto = this.formulario.group({gasto:['']})
  }

  addGasto(){
    if (window.confirm("¿Seguro de añadir un Prestamo?") ){
      this.crudService.addGastoLocal(this.formularioGasto.value);
      this.router.navigateByUrl("");
    }
  }

}
